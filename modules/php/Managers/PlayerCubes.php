<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;

class PlayerCubes
{

  // public static function getValues()
  // {
  //   return Globals::getDice();
  // }

  // public static function getFaces()
  // {
  //   return self::mapDiceResults(Globals::getDice());
  // }

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

  public static function getReputationForSuit($playerId, $suit)
  {
    $cubes = Globals::getPlayerCubes();
    if (isset($cubes[$playerId][$suit])) {
      return $cubes[$playerId][$suit];
    } else {
      throw new \feException("ERROR_007");
    }
    
  }

  // public static function mapDiceResults($diceResults) {
  //   return array_map(function ($dieFaceIndex) {
  //     return DIE_FACES[$dieFaceIndex];
  //   }, $diceResults);;
  // }

  // public static function rollDice($player = null, $notify = true)
  // {
  //   $dieResults = [];
  //   for ($i = 0; $i < 2; $i++) {
  //     $dieResults[] = bga_rand(0, 5);
  //   }
  //   Globals::setDice($dieResults);

  //   if ($player !== null && $notify) {
  //     Notifications::rollDice($player, $dieResults);
  //   }

  //   return self::mapDiceResults($dieResults);
  // }
}
