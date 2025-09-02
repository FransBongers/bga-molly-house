<?php

namespace Bga\Games\MollyHouse;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;



use Bga\Games\MollyHouse\Managers\AtomicActions;
use Bga\Games\MollyHouse\Managers\DieManager;
use Bga\Games\MollyHouse\Managers\EncounterTokens;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\IndictmentCards;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\PlayerCubes;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\PlayersExtra;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

trait DebugTrait
{
  function setupItem($item, $families) {}




  function debug_test()
  {

    Sites::get(MOTHER_CLAPS)->setEvidence(6);
    Sites::get(MISS_MUFFS)->setEvidence(6);
    // Sites::get(SUKEY_BEVELLS)->setEvidence(6);

    // AtomicActions::get(END_OF_WEEK_CHECK_FOR_RAIDS)->gainIndictments(Sites::get(MOTHER_CLAPS));

    // Notifications::log('accuse', AtomicActions::get(ACCUSE)->getOptions(Players::get(2371053), Sites::get(JULIUS_CESAR_TAYLORS)));

    // Items::setupNewGame();
    // Notifications::log('itemsStatic', Items::getStaticUiData());
    // Items::pickOneForLocation(DECK, Locations::item(2371052,1));
    // Items::pickOneForLocation(DECK, Locations::item(2371052,2));

    // DieManager::rollDice(Players::get());
    // Pawns::setupNewGame();
    // Notifications::log('tradeRoute', TradeRoutes::getOrdersForTradeRoute(ORDER_BOMBAY_3, 16));


  }

  function debug_engineDisplay()
  {
    Notifications::log('engine', Globals::getEngine());
  }
}
