<?php

namespace Bga\Games\MollyHouse;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;

trait TurnTrait
{

  function stStartGameEngine()
  {
    // custom order activates stStartOfTurn when it's a players turn
    $this->initCustomDefaultTurnOrder('default', 'stStartOfTurn', 'not_used', true, false);

    $node = [
      'children' => [
        [
          'action' => PLAYER_SETUP_CHOOSE_CARD,
          'playerId' => 'all',
        ],
      ],
    ];

    // Inserting leaf Action card
    Engine::setup($node, ['method' => 'stNextPlayer']);
    Engine::proceed();
  }

  function stStartOfTurn()
  {
    $player = Players::getActive();
    $playerId = $player->getId();
    self::giveExtraTime($playerId);



    $nodes = [];

    if (ViceCards::countInLocation(DECK) === 0) {
      Notifications::phase(clienttranslate('End of the Week'));
      $player->takeCandelabra();
      $nodes = [
        [
          'action' => END_OF_WEEK_REVEAL_THREATS,
        ],
        [
          'action' => END_OF_WEEK_SOCIETY_INVESTIGATES,
        ],
        [
          'action' => END_OF_WEEK_CHECK_FOR_RAIDS,
        ],
    [
          'action' => END_OF_WEEK_CHECK_GAME_END,
        ],
      ];
    }

    $nodes = array_merge($nodes, [
      [
        'action' => LOG_PHASE,
        'phase' => START_OF_TURN_MESSAGE,
        'playerId' => $playerId,
      ],
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
    ]);

    $node = [
      'children' => $nodes,
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
