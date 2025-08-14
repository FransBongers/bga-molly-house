<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;

class PlayerCubes
{

  public static function setupNewGame()
  {
    $players = Players::getAll();
    $cubes = [];
    foreach ($players as $player) {
      $cubes[$player->getId()] = [
        PENTACLES => 0,
        CUPS => 0,
        HEARTS => 0,
        FANS => 0,
      ];
    }
    Globals::setPlayerCubes($cubes);
  }

  public static function getCubesForPlayer($playerId)
  {
    return Globals::getPlayerCubes()[$playerId];
  }

  public static function getReputationForSuit($playerId, $suit)
  {
    $cubes = Globals::getPlayerCubes();
    if (isset($cubes[$playerId][$suit])) {
      return $cubes[$playerId][$suit];
    } else {
      throw new \feException("ERROR_007");
    }
  }

  public static function gainCubes($playerId, $suit, $numberOfCubes)
  {
    $cubes = Globals::getPlayerCubes();
    $cubes[$playerId][$suit] += $numberOfCubes;
    Globals::setPlayerCubes($cubes);
  }
}
