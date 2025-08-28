<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\GameFramework\Notify;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;



class ViceCards extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'vice_cards';
  protected static $prefix = 'card_';
  protected static $customFields = [
    'festivity_value',
    'hidden',
  ];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($card)
  {
    return self::getCardInstance($card['card_id'], $card);
  }

  public static function getCardInstance($id, $data = null)
  {
    // $prefix = self::getClassPrefix($id);

    $className = "\Bga\Games\MollyHouse\Cards\ViceCards\\$id";
    return new $className($data);
  }

  /**
   * getStaticUiData : return static data
   */
  public static function getStaticUiData()
  {
    $pieces = self::getAll()->toArray();

    $data = [];
    foreach ($pieces as $index => $piece) {
      $data[$piece->getId()] = $piece->getStaticData();
    }
    return $data;
  }

  public static function getMarket()
  {
    $cards = self::getAll();
    $result = [];
    foreach ($cards as $cardId => $card) {
      if (in_array($card->getLocation(), MARKET_SPOTS)) {
        $result[$cardId] = $card;
      }
    }
    return $result;
  }

  public static function getCardFarthestFromViceDeck()
  {
    $cards = self::getSelectQuery()->where('card_location', 'LIKE', 'market%')->get()->toArray();

    $card = null;
    $index = -1;
    foreach ($cards as $cardInMarket) {
      $cardIndex = array_search($cardInMarket->getLocation(), MARKET_SPOTS);
      if ($cardIndex > $index) {
        $index = $cardIndex;
        $card = $cardInMarket;
      }
    }

    return $card;
  }


  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......


  private static function setupLoadCards($playerCount)
  {
    // Load list of cards
    include dirname(__FILE__) . '/../Cards/ViceCards/list.inc.php';

    $cards = [];



    foreach ($viceCardIds as $index => $cId) {
      $card = self::getCardInstance($cId);
      if ($card->getMinPlayers() > $playerCount) {
        // Skip cards that are not valid for the current player count
        continue;
      }

      $displayValue = $card->getDisplayValue();
      $festivityValue = in_array($displayValue, ['J', 'Q', 'R', 'C']) ? 0 : $displayValue;

      $cards[$cId] = [
        'id' => $cId,
        'location' => DECK,
        'festivity_value' => $festivityValue,
      ];
    }

    // Create the cards
    self::create($cards, null);
    self::shuffle(DECK);
  }

  private static function createMarket()
  {
    foreach (MARKET_SPOTS as $location) {
      self::pickOneForLocation(DECK, $location);
    }
  }

  private static function dealCards($playerCount)
  {
    $numberOfCards = $playerCount === 2 ? 5 : 4;
    $players = Players::getAll();
    foreach ($players as $player) {
      $playerId = $player->getId();
      self::pickForLocation($numberOfCards, DECK, Locations::hand($playerId));
    }
  }

  /* Creation of the cards */
  public static function setupNewGame($players = null, $options = null)
  {
    self::setupLoadCards(count($players));
    self::createMarket();
    self::pickOneForLocation(DECK, GOSSIP_PILE);
    self::dealCards(count($players));
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public static function refillMarket($player = null)
  {
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
      $card = self::getTopOf($marketSpot);

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
      $card = self::getTopOf(DECK);
      if ($card === null) {
        break;
      }
      $card->setLocation($spot);
      $addedCards[] = $card;
    }

    if (count($movedCards) + count($addedCards) > 0) {
      Notifications::refillMarket($player, $movedCards, $addedCards);
    }
  }
}
