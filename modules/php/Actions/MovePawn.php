<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Managers\DieManager;
use Bga\Games\MollyHouse\Managers\Sites;

class MovePawn extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_MOVE_PAWN;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsMovePawn()
  {
    // $info = $this->ctx->getInfo();

    $rolledFaces = DieManager::getFaces();

    // Determine the exact number of steps the player can take
    $stepsToTake = [];
    $total = 0;
    foreach ($rolledFaces as $dieFace) {

      if ($dieFace === SINGLE_BOOT) {
        $total += 1;

        if (!in_array(1, $stepsToTake)) {
          $stepsToTake[] = 1;
        }
      } else if ($dieFace === DOUBLE_BOOT) {
        $total += 2;
        if (!in_array(2, $stepsToTake)) {
          $stepsToTake[] = 2;
        }
      }
    }
    $marketDiscardRolled = in_array(MARKET_DISCARD, $rolledFaces);
    if (!$marketDiscardRolled) {
      $stepsToTake[] = $total;
    }
    if (count($stepsToTake) > 0 && $marketDiscardRolled) {
      $stepsToTake[] = 0;
    }

    $player = $this->getPlayer();
    $pawn = $player->getPawn();

    $data = [
      // 'dice' => $rolledFaces,
      // 'steps' => $stepsToTake,
      'pawn' => $pawn,
      'fancyFellow' => count($stepsToTake) === 0,
      'sites' => $this->getSites($stepsToTake, $pawn->getLocation()),
    ];

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

  public function actPassMovePawn()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actMovePawn($args)
  {
    self::checkAction('actMovePawn');

    $siteId = $args->siteId;

    $stateArgs = $this->argsMovePawn();

    if (!isset($stateArgs['sites'][$siteId])) {
      throw new \feException("ERROR_003");
    }

    $pawn = $stateArgs['pawn'];

    $pawn->move($this->getPlayer(), $siteId);

    $this->resolveAction([]);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private function getSites($stepsToTake, $pawnLocation)
  {
    $sites = Sites::getAll();
    if (count($stepsToTake) === 0) {
      return $sites;
    }

    $pawnIndex = array_search($pawnLocation, SITES);
    $sitesToMoveTo = [];

    foreach ($stepsToTake as $stepToTake) {
      if ($stepToTake === 0) {
        $sitesToMoveTo[$pawnLocation] = $sites[$pawnLocation];
      }

      foreach ([$stepToTake, -$stepToTake] as $steps) {
        $highestIndex = count(SITES) - 1;
        $toIndex = $pawnIndex + $steps;
        if ($toIndex > $highestIndex) {
          $toIndex = $toIndex - $highestIndex - 1;
        } else if ($toIndex < 0) {
          $toIndex = $highestIndex + $toIndex + 1;
        }

        $siteId = SITES[$toIndex];
        $sitesToMoveTo[$siteId] = $sites[$siteId];
      }
    }

    return $sitesToMoveTo;
  }
}
