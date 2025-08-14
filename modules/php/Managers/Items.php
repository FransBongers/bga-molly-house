<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\GameFramework\Notify;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;

class Items extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'items';
  protected static $prefix = 'item_';
  protected static $customFields = [
    'type'
  ];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($card)
  {
    return self::getCardInstance($card['item_id'], $card);
  }

  public static function getCardInstance($id, $data = null)
  {
    // $prefix = self::getClassPrefix($id);
    $type = $data['type'];
    $className = "\Bga\Games\MollyHouse\Cards\Items\\$type";
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


  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......


  private static function setupLoadCards()
  {

    $cards = [];
    $index = 1;

    foreach (ITEM_DISTRIBUTIION as $type => $count) {
      for ($i = 0; $i < $count; $i++) {
        $cardId = 'item_' . $index;
        $cards[$cardId] = [
          'id' => $cardId,
          'location' => DECK,
          'type' => $type,
        ];
        $index++;
      }
    }


    // Create the cards
    self::create($cards, null);
    self::shuffle(DECK);
  }


  /* Creation of the cards */
  public static function setupNewGame($players = null, $options = null)
  {
    self::setupLoadCards();

    foreach(SHOP_SITES as $site) {
      self::pickOneForLocation(DECK, $site);
    }
  }
}
