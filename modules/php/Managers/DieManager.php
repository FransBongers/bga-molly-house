<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;

class DieManager
{

  public static function getValues()
  {
    return Globals::getDice();
  }

  public static function getFaces()
  {
    return self::mapDiceResults(Globals::getDice());
  }

  public static function setupNewGame()
  {
    self::rollDice();
  }

  public static function mapDiceResults($diceResults) {
    return array_map(function ($dieFaceIndex) {
      return DIE_FACES[$dieFaceIndex];
    }, $diceResults);;
  }

  public static function rollDice($player = null, $notify = true)
  {
    $dieResults = [];
    for ($i = 0; $i < 2; $i++) {
      $dieResults[] = bga_rand(0, 5);
    }
    Globals::setDice($dieResults);

    if ($player !== null && $notify) {
      Notifications::rollDice($player, $dieResults);
    }

    return self::mapDiceResults($dieResults);
  }
}
