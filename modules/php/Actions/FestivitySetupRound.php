<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;


class FestivitySetupRound extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_SETUP_ROUND;
  }

  // ..######..########....###....########.########
  // .##....##....##......##.##......##....##......
  // .##..........##.....##...##.....##....##......
  // ..######.....##....##.....##....##....######..
  // .......##....##....#########....##....##......
  // .##....##....##....##.....##....##....##......
  // ..######.....##....##.....##....##....########

  // ....###.....######..########.####..#######..##....##
  // ...##.##...##....##....##.....##..##.....##.###...##
  // ..##...##..##..........##.....##..##.....##.####..##
  // .##.....##.##..........##.....##..##.....##.##.##.##
  // .#########.##..........##.....##..##.....##.##..####
  // .##.....##.##....##....##.....##..##.....##.##...###
  // .##.....##..######.....##....####..#######..##....##


  public function stFestivitySetupRound()
  {
    $info = $this->ctx->getInfo();
    $round = $info['round'];

    Festivity::setRound($round);
    Notifications::festivityPhase([
      'log' => clienttranslate('round ${roundNumber}'),
      'args' => [
        'roundNumber' => $round,
      ],
    ]);

    $festivity = Festivity::get();

    $runnerPlayerId = $festivity['runner'];

    $playerOrder = Players::getTurnOrder($runnerPlayerId);
    $playerOrder = Utils::filter($playerOrder, function ($p) use ($festivity) {
      return !in_array($p, $festivity['passed']);
    });

    $nodes = [
      [
        'action' => FESTIVITY_REVEAL_TOP_CARD_VICE_DECK,
        'playerId' => $runnerPlayerId,
      ]
    ];

    foreach ($playerOrder as $playerId) {
      $nodes[] = [
        'action' => FESTIVITY_PLAY_CARD,
        'playerId' => $playerId,
        'optional' => $playerId !== $runnerPlayerId,
      ];
    }

    $this->ctx->insertAsBrother(Engine::buildTree([
      'children' => $nodes,
    ]));

    $this->resolveAction(['automatic' => true]);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
