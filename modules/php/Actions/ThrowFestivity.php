<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Models\Player;

class ThrowFestivity extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_THROW_FESTIVITY;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsThrowFestivity()
  {
    $info = $this->ctx->getInfo();

    $data = [];

    return $data;
  }

  //  .########..##..........###....##....##.########.########.
  //  .##.....##.##.........##.##....##..##..##.......##.....##
  //  .##.....##.##........##...##....####...##.......##.....##
  //  .########..##.......##.....##....##....######...########.
  //  .##........##.......#########....##....##.......##...##..
  //  .##........##.......##.....##....##....##.......##....##.
  //  .##........########.##.....##....##....########.##.....##

  // ....###.....######..########.####..#######..##....##
  // ...##.##...##....##....##.....##..##.....##.###...##
  // ..##...##..##..........##.....##..##.....##.####..##
  // .##.....##.##..........##.....##..##.....##.##.##.##
  // .#########.##..........##.....##..##.....##.##..####
  // .##.....##.##....##....##.....##..##.....##.##...###
  // .##.....##..######.....##....####..#######..##....##

  public function actPassThrowFestivity()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actThrowFestivity($args)
  {
    self::checkAction('actThrowFestivity');

    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public function getOptions($player, $site)
  {
    if ($site->isRaided()) {
      return false;
    }

    $playerHand = $player->getHand();

    $numberOfPlayers = count(Players::getAll());

    $requiredHandSize = $numberOfPlayers === 2 ? 3 : 2;

    if (count($playerHand) < $requiredHandSize) {
      return false;
    }

    return true;
  }

  public function performAction($ctx, $player, $site)
  {
    Notifications::throwFestivity($player, $site);


    Festivity::start($player);

    $nodes = [];

    $playerCount = count(Players::getAll());
    $numberOfRounds = $playerCount === 2 ? 3 : 2;
    for ($index = 0; $index < $numberOfRounds; $index++) {
      $nodes[] = [
        'action' => FESTIVITY_SETUP_ROUND,
        'round' => $index + 1,
        'playerId' => $player->getId(),
      ];
    }

    $otherNodes = [
      [
        'action' => LOG_STEP,
        'stepToLog' => FESTIVITY_DETERMINE_WINNING_SET,
      ],
      [
        'action' => FESTIVITY_DETERMINE_WINNING_SET,
      ],
      [
        'action' => FESTIVITY_SCORE_JOY,
      ],
      [
        'action' => LOG_STEP,
        'stepToLog' => FESTIVITY_GENERATE_GOSSIP,
      ],
      [
        'action' => FESTIVITY_GENERATE_GOSSIP,
        'playerId' => $player->getId(),
      ],
      [
        'action' => FESTIVITY_SCORE_BONUS,
      ],
      [
        'action' => FESTIVITY_CLEANUP,
      ]
    ];

    $ctx->insertAsBrother(Engine::buildTree([
      'children' => array_merge($nodes, $otherNodes),
    ]));
  }
}
