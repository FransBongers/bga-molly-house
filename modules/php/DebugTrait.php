<?php

namespace Bga\Games\MollyHouse;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;



use Bga\Games\MollyHouse\Managers\AtomicActions;
use Bga\Games\MollyHouse\Managers\DieManager;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\IndictmentCards;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\PlayerCubes;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

trait DebugTrait
{
  function setupItem($item, $families) {}




  function debug_test()
  {
    // Sites::get(SUKEY_BEVELLS)->setEvidence(6);


    Notifications::log('sites', AtomicActions::get(END_OF_WEEK_CHECK_FOR_RAIDS)->gainIndictments(Sites::get(MOTHER_CLAPS)));

    // DieManager::rollDice(Players::get());
    // Pawns::setupNewGame();
    // Notifications::log('tradeRoute', TradeRoutes::getOrdersForTradeRoute(ORDER_BOMBAY_3, 16));


  }

  function debug_engineDisplay()
  {
    Notifications::log('engine', Globals::getEngine());
  }
}
