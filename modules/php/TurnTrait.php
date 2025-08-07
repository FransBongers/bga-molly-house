<?php

namespace Bga\Games\MollyHouse;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Players;


trait TurnTrait
{

  function stStartGameEngine()
  {
    // custom order activates stStartOfTurn when it's a players turn
    $this->initCustomDefaultTurnOrder('default', 'stStartOfTurn', 'not_used', true);

    $node = [
      'children' => [
        [
          'action' => PLAYER_SETUP_CHOOSE_CARD,
          'playerId' => 'all',
        ],
      ],
    ];

    // Inserting leaf Action card
    Engine::setup($node, ['method' => 'stStartOfTurn']);
    Engine::proceed();
  }

  function stStartOfTurn()
  {
    $player = Players::getActive();
    $playerId = $player->getId();
    self::giveExtraTime($playerId);

    Notifications::startOfTurn($player);

    $node = [
      'children' => [
        [
          'action' => ROLL_DICE,
          'playerId' => $playerId,
        ],
        [
          'action' => MOVE_PAWN,
          'playerId' => $playerId,
        ],
        [
          'action' => TAKE_ACTION,
          'playerId' => $playerId,
        ],
        [
          'action' => CHECK_HAND_SIZE,
          'playerId' => $playerId,
        ],
      ],
    ];

    Engine::setup($node, ['method' => 'stSetupRefillMarket']);
    Engine::proceed();
  }

  function stSetupRefillMarket()
  {
    // TO CHECK: is active player always the player whos turn it is?
    $player = Players::getActive();
    $playerId = $player->getId();

    $node = [
      'children' => [
        [
          'action' => REFILL_MARKET,
          'playerId' => $playerId,
        ],
      ],
    ];

    Engine::setup($node, ['method' => 'stNextPlayer']);
    Engine::proceed();
  }

  function stNextPlayer()
  {
    // Check if ViceDeck is empty

    $this->nextPlayerCustomOrder('default');
  }


  public function stGenericNextPlayer() {}


  function endOfGameInit() {}

  function stPreEndOfGame() {}


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
