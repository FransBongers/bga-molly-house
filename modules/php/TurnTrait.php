<?php

namespace Bga\Games\MollyHouseFrans;

use Bga\Games\MollyHouseFrans\Boilerplate\Core\Engine;
use Bga\Games\MollyHouseFrans\Boilerplate\Core\Globals;
use Bga\Games\MollyHouseFrans\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouseFrans\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouseFrans\Managers\Players;


trait TurnTrait
{
  /**
   * State function when starting a turn useful to intercept
   * for some cards that happens at that moment
   */
  function stBeforeStartOfTurn()
  {
    // TODO: check end callback
    $this->initCustomDefaultTurnOrder('default', \ST_TURNACTION, ST_BEFORE_START_OF_TURN, true);
  }






  function setupGameTurn() {}

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
