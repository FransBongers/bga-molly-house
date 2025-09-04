<?php

/**
 *------
 * BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
 * MollyHouse implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * Game.php
 *
 * This is the main file for your game logic.
 *
 * In this PHP file, you are going to defines the rules of the game.
 */

declare(strict_types=1);

namespace Bga\Games\MollyHouse;

require_once(APP_GAMEMODULE_PATH . "module/table/table.game.php");
require_once("Boilerplate/constants.inc.php");
require_once("constants.inc.php");

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Managers\Community;
use Bga\Games\MollyHouse\Managers\DieManager;
use Bga\Games\MollyHouse\Managers\EncounterTokens;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\IndictmentCards;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\JoyMarkers;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\PlayerCubes;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\PlayersExtra;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;;

class Game extends \Bga\GameFramework\Table
{
    use \Bga\Games\MollyHouse\DebugTrait;
    use \Bga\Games\MollyHouse\EngineTrait;
    use \Bga\Games\MollyHouse\TurnTrait;

    /**
     * Your global variables labels:
     *
     * Here, you can assign labels to global variables you are using for this game. You can use any number of global
     * variables with IDs between 10 and 99. If you want to store any type instead of int, use $this->globals instead.
     *
     * NOTE: afterward, you can get/set the global variables with `getGameStateValue`, `setGameStateInitialValue` or
     * `setGameStateValue` functions.
     */
    public static $instance = null;
    public function __construct()
    {
        parent::__construct();

        self::$instance = $this;
        $this->initGameStateLabels([
            'logging' => 10,
        ]);
        Engine::boot();

        /* example of notification decorator.
        // automatically complete notification args when needed
        $this->notify->addDecorator(function(string $message, array $args) {
            if (isset($args['player_id']) && !isset($args['player_name']) && str_contains($message, '${player_name}')) {
                $args['player_name'] = $this->getPlayerNameById($args['player_id']);
            }
        
            if (isset($args['card_id']) && !isset($args['card_name']) && str_contains($message, '${card_name}')) {
                $args['card_name'] = self::$CARD_TYPES[$args['card_id']]['card_name'];
                $args['i18n'][] = ['card_name'];
            }
            
            return $args;
        });*/
    }

    // .########...#######..####.##.......########.########.
    // .##.....##.##.....##..##..##.......##.......##.....##
    // .##.....##.##.....##..##..##.......##.......##.....##
    // .########..##.....##..##..##.......######...########.
    // .##.....##.##.....##..##..##.......##.......##...##..
    // .##.....##.##.....##..##..##.......##.......##....##.
    // .########...#######..####.########.########.##.....##

    // .########..##..........###....########.########
    // .##.....##.##.........##.##......##....##......
    // .##.....##.##........##...##.....##....##......
    // .########..##.......##.....##....##....######..
    // .##........##.......#########....##....##......
    // .##........##.......##.....##....##....##......
    // .##........########.##.....##....##....########

    public static function get()
    {
        return self::$instance;
    }

    // Exposing protected method getCurrentPlayerId
    public function getCurrentPId()
    {
        return $this->getCurrentPlayerId();
    }

    // Exposing protected method translation
    public static function translate($text)
    {
        return self::_($text);
    }

    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    ////////////   Custom Turn Order   ////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    public function initCustomTurnOrder($key, $order, $callback, $endCallback, $loop = false, $autoNext = true, $args = [])
    {
        $turnOrders = Globals::getCustomTurnOrders();
        $turnOrders[$key] = [
            'order' => $order ?? Players::getTurnOrder(),
            'index' => -1,
            'callback' => $callback,
            'args' => $args, // Useful mostly for auto card listeners
            'endCallback' => $endCallback,
            'loop' => $loop,
        ];
        Globals::setCustomTurnOrders($turnOrders);

        if ($autoNext) {
            $this->nextPlayerCustomOrder($key);
        }
    }

    public function initCustomDefaultTurnOrder($key, $callback, $endCallback, $loop = false, $autoNext = true)
    {
        $this->initCustomTurnOrder($key, null, $callback, $endCallback, $loop, $autoNext);
    }

    public function nextPlayerCustomOrder($key)
    {
        $turnOrders = Globals::getCustomTurnOrders();
        if (!isset($turnOrders[$key])) {
            throw new \BgaVisibleSystemException('Asking for the next player of a custom turn order not initialized : ' . $key);
        }

        // Increase index and save
        $o = $turnOrders[$key];
        $i = $o['index'] + 1;
        if ($i == count($o['order']) && $o['loop']) {
            $i = 0;
        }
        $turnOrders[$key]['index'] = $i;
        Globals::setCustomTurnOrders($turnOrders);

        if ($i < count($o['order'])) {
            $this->gamestate->jumpToState(ST_GENERIC_NEXT_PLAYER);
            $this->gamestate->changeActivePlayer($o['order'][$i]);
            $this->jumpToOrCall($o['callback'], $o['args']);
        } else {
            $this->endCustomOrder($key);
        }
    }

    public function endCustomOrder($key)
    {
        $turnOrders = Globals::getCustomTurnOrders();
        if (!isset($turnOrders[$key])) {
            throw new \BgaVisibleSystemException('Asking for ending a custom turn order not initialized : ' . $key);
        }

        $o = $turnOrders[$key];
        $turnOrders[$key]['index'] = count($o['order']);
        Globals::setCustomTurnOrders($turnOrders);
        $callback = $o['endCallback'];
        $this->jumpToOrCall($callback);
    }

    public function jumpToOrCall($mixed, $args = [])
    {
        if (is_int($mixed) && array_key_exists($mixed, $this->gamestate->states)) {
            $this->gamestate->jumpToState($mixed);
        } elseif (method_exists($this, $mixed)) {
            $method = $mixed;
            $this->$method($args);
        } else {
            throw new \BgaVisibleSystemException('Failing to jumpToOrCall  : ' . $mixed);
        }
    }

    // .########.##....##.########.....########..########.
    // .##.......###...##.##.....##....##.....##.##.....##
    // .##.......####..##.##.....##....##.....##.##.....##
    // .######...##.##.##.##.....##....########..########.
    // .##.......##..####.##.....##....##.....##.##.......
    // .##.......##...###.##.....##....##.....##.##.......
    // .########.##....##.########.....########..##.......

    /**
     * Compute and return the current game progression.
     *
     * The number returned must be an integer between 0 and 100.
     *
     * This method is called each time we are in a game state with the "updateGameProgression" property set to true.
     *
     * @return int
     * @see ./states.inc.php
     */
    public function getGameProgression()
    {
        // TODO: compute and return the game progression

        return 0;
    }


    /**
     * Migrate database.
     *
     * You don't have to care about this until your game has been published on BGA. Once your game is on BGA, this
     * method is called everytime the system detects a game running with your old database scheme. In this case, if you
     * change your database scheme, you just have to apply the needed changes in order to update the game database and
     * allow the game to continue to run with your new version.
     *
     * @param int $from_version
     * @return void
     */
    public function upgradeTableDb($from_version)
    {




        // if ($from_version <= 2509012241) {
        //     // ! important ! Use `DBPREFIX_<table_name>` for all tables
        //     $sql = "ALTER TABLE `DBPREFIX_indictment_cards` ADD `indictment_id` VARCHAR(32) NOT NULL;";
        //     $this->applyDbUpgradeToAllDB($sql);
        // }
        //
            //   if ($from_version <= 2509042011)
            //   {
            //         $sql = ""
            //             . "CREATE TABLE IF NOT EXISTS `DBPREFIX_joy_markers` ("
            //             . "`joy_marker_id` varchar(32) NOT NULL,"
            //             . "`joy_marker_location` varchar(32) NOT NULL,"
            //             . "`joy_marker_state` int(10) DEFAULT 0,"
            //             . "`hanged` int(10) DEFAULT 0,"
            //             . "`color` varchar(32) NOT NULL,"
            //             . "PRIMARY KEY (`joy_marker_id`)"
            //             . ") ENGINE = InnoDB DEFAULT CHARSET = utf8;";
            //         self::applyDbUpgradeToAllDB($sql);

            //         JoyMarkers::setupNewGame();

            //   }
    }

    /*
     * Gather all information about current game situation (visible by the current player).
     *
     * The method is called each time the game interface is displayed to a player, i.e.:
     *
     * - when the game starts
     * - when a player refreshes the game page (F5)
     */
    public function getAllDatas($playerId = null): array
    {
        $playerId = $playerId ?? Players::getCurrentId();

        $data = [
            // Default
            'gameOptions' => [],
            'playerOrder' => Players::getTurnOrder($playerId),
            'players' => Players::getUiData($playerId),
            'staticData' => [
                'items' => Items::getStaticUiData(),
                'viceCards' => ViceCards::getStaticUiData(),
                'sites' => Sites::getStaticUiData(),
            ],
            'communityJoy' => Community::getJoy(),
            'currentWeek' => Globals::getCurrentWeek(),
            'deckCount' => ViceCards::countInLocation(DECK),
            'dice' => DieManager::getValues(),
            'festivity' => Festivity::getGamedatas(),
            'gossipPileCount' => ViceCards::countInLocation(GOSSIP_PILE),
            'itemsOnShops' => Items::getItemsOnShops(),
            'market' => ViceCards::getMarket(),
            'pawns' => Pawns::getAll(),
            'safePile' => ViceCards::getInLocation(SAFE_PILE),
            'sites' => Sites::getAll(),
            'topOfSafePile' => ViceCards::getTopOf(SAFE_PILE),
            'encounterTokens' => EncounterTokens::getEncounterTokensOnMollyHouses($playerId),
            'joyMarkers' => JoyMarkers::getAll(),
        ];



        return $data;
    }

    /**
     * This method is called only once, when a new game is launched. In this method, you must setup the game
     *  according to the game rules, so that the game is ready to be played.
     */
    protected function setupNewGame($players, $options = [])
    {
        Globals::setupNewGame($players, $options);
        Festivity::setupNewGame();
        DieManager::setupNewGame();
        Players::setupNewGame($players, $options);
        PlayersExtra::setupNewGame($players, $options);
        ViceCards::setupNewGame($players, $options);
        Pawns::setupNewGame($players, $options);
        Sites::setupNewGame($players, $options);
        IndictmentCards::setupNewGame($players, $options);
        Items::setupNewGame($players, $options);
        EncounterTokens::setupNewGame($players, $options);
        JoyMarkers::setupNewGame($players, $options);


        $this->activeNextPlayer();
    }
    /**
     * This method is called each time it is the turn of a player who has quit the game (= "zombie" player).
     * You can do whatever you want in order to make sure the turn of this player ends appropriately
     * (ex: pass).
     *
     * Important: your zombie code will be called when the player leaves the game. This action is triggered
     * from the main site and propagated to the gameserver from a server, not from a browser.
     * As a consequence, there is no current player associated to this action. In your zombieTurn function,
     * you must _never_ use `getCurrentPlayerId()` or `getCurrentPlayerName()`, otherwise it will fail with a
     * "Not logged" error message.
     *
     * @param array{ type: string, name: string } $state
     * @param int $active_player
     * @return void
     * @throws feException if the zombie mode is not supported at this game state.
     */
    protected function zombieTurn(array $state, int $active_player): void
    {
        $state_name = $state["name"];

        if ($state["type"] === "activeplayer") {
            switch ($state_name) {
                default: {
                        $this->gamestate->nextState("zombiePass");
                        break;
                    }
            }

            return;
        }

        // Make sure player is in a non-blocking status for role turn.
        if ($state["type"] === "multipleactiveplayer") {
            $this->gamestate->setPlayerNonMultiactive($active_player, '');
            return;
        }

        throw new \feException("Zombie mode not supported at this game state: \"{$state_name}\".");
    }
}
