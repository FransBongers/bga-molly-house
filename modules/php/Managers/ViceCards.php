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
    'hidden'
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
    $pieces = self::getAll()->toArray();
    return Utils::filter($pieces, function ($piece) {
      return in_array($piece->getLocation(), MARKET_SPOTS);
    });
  }

  public static function getCardFarthestFromViceDeck()
  {
    $cards = self::getSelectQuery()->where('card_location', 'LIKE', 'market%')->get()->toArray();
    Notifications::log('getCardFarthestFromViceDeck', $cards);
    $card = null;
    $index = -1;
    foreach($cards as $cardInMarket) {
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

      $cards[$cId] = [
        'id' => $cId,
        'location' => DECK,
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
}
