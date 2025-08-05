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

  function stNextPlayer()
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
          'action' => PLAYER_TURN,
          'playerId' => $playerId,
        ],
      ],
    ];

    Engine::setup($node, ['method' => 'stNextPlayer']);
    Engine::proceed();
  }




  function setupPlayerTurn() {}

  /**
   * Activate next player
   * TODO: is this even used?
   */
  function stTurnAction()
  {
    $player = Players::getActive();
    self::giveExtraTime($player->getId());

    $node = [
      'children' => [],
    ];
    // Notifications::startTurn($player);

    // Inserting leaf Action card
    Engine::setup($node, ['method' => 'stTurnAction']);
    Engine::proceed();
  }


  function endOfGameInit()
  {
    // if (Globals::getEndFinalScoringDone() !== true) {
    //   // Trigger discard state
    //   Engine::setup(
    //     [
    //       'action' => DISCARD_SCORING,
    //       'playerId' => 'all',
    //       'args' => ['current' => Players::getActive()->getId()],
    //     ],
    //     ''
    //   );
    //   Engine::proceed();
    // } else {
    //   // Goto scoring state
    //   $this->gamestate->jumpToState(\ST_PRE_END_OF_GAME);
    // }
    // return;
  }

  function stPreEndOfGame() {}


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
