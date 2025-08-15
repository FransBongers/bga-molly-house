<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;


class RefillMarket extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_REFILL_MARKET;
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


  public function stRefillMarket()
  {
    // $cardsInMarket = ViceCards::getMarket();

    $reversedMarketSpots =  [
      MARKET_3,
      MARKET_2,
      MARKET_1,
      MARKET_0,
    ];

    $openSpots = [];
    $movedCards = [];
    $addedCards = [];

    // Move cards
    foreach ($reversedMarketSpots as $marketSpot) {
      // TODO: can be done more efficiently?
      $card = ViceCards::getTopOf($marketSpot);

      if ($card === null) {
        $openSpots[] = $marketSpot;
      } else if ($card !== null && count($openSpots) > 0) {
        // Move card to first open spot
        $spot = array_shift($openSpots);
        $card->setLocation($spot);
        $movedCards[] = $card;
        $openSpots[] = $marketSpot;
      }
    }

    // Fill remaining open spots
    foreach ($openSpots as $spot) {
      $card = ViceCards::getTopOf(DECK);
      if ($card === null) {
        break;
      }
      $card->setLocation($spot);
      $addedCards[] = $card;
    }

    if (count($movedCards) + count($addedCards) > 0) {
      Notifications::refillMarket($this->getPlayer(), $movedCards, $addedCards);
    }


    $this->resolveAction(['automatic' => true], true);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
