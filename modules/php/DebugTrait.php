<?php

namespace Bga\Games\MollyHouseFrans;

use Bga\Games\MollyHouseFrans\Boilerplate\Core\Globals;
use Bga\Games\MollyHouseFrans\Boilerplate\Core\Engine;
use Bga\Games\MollyHouseFrans\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouseFrans\Boilerplate\Helpers\Locations;

use Bga\Games\MollyHouseFrans\Managers\Players;


use Bga\Games\MollyHouseFrans\Managers\AtomicActions;


trait DebugTrait
{
  function setupItem($item, $families) {}




  function debug_test()
  {
    // Notifications::log('tradeRoute', TradeRoutes::getOrdersForTradeRoute(ORDER_BOMBAY_3, 16));
    

  }

  function debug_engineDisplay()
  {
    Notifications::log('engine', Globals::getEngine());
  }
}
