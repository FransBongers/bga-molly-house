<?php

namespace Bga\Games\MollyHouse;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;



use Bga\Games\MollyHouse\Managers\AtomicActions;
use Bga\Games\MollyHouse\Managers\DieManager;
use Bga\Games\MollyHouse\Managers\IndictmentCards;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

trait DebugTrait
{
  function setupItem($item, $families) {}




  function debug_test()
  {
    $pawnIndex = 1;

    $steps = -3;

    $highestIndex = count(SITES) - 1;
    $toIndex = $pawnIndex + $steps;
    if ($toIndex > $highestIndex) {
      $toIndex = $toIndex - $highestIndex - 1;
    } else if ($toIndex < 0) {
      $toIndex = $highestIndex + $toIndex + 1;
    }
    Notifications::log('toIndex', $toIndex);

    // DieManager::rollDice(Players::get());
    // Pawns::setupNewGame();
    // Notifications::log('tradeRoute', TradeRoutes::getOrdersForTradeRoute(ORDER_BOMBAY_3, 16));


  }

  function debug_engineDisplay()
  {
    Notifications::log('engine', Globals::getEngine());
  }
}
