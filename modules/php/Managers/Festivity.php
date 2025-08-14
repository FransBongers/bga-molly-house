<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;

class Festivity
{

  public static function setupNewGame()
  {
    $festivity = self::getFestivityObject();

    Globals::setFestivity($festivity);
  }

  public static function get()
  {
    return Globals::getFestivity();
  }

  public static function setRound($round)
  {
    $festivity = self::get();
    $festivity['round'] = $round;

    Globals::setFestivity($festivity);
  }

  public static function pass($playerId)
  {
    $festivity = self::get();
    $festivity['passed'][] = $playerId;

    Globals::setFestivity($festivity);
  }

  public static function start($player)
  {
    $festivity = self::getFestivityObject();
    $festivity['active'] = true;
    $festivity['runner'] = $player->getId();

    Globals::setFestivity($festivity);
  }

  public static function getGamedatas()
  {
    $festivity = self::get();
    $gamedatas = [
      'active' => $festivity['active'],
      'runner' => $festivity['runner'],
      'passed' => $festivity['passed'],
      'round' => $festivity['round'],
      'rogues' => $festivity['rogues'],
      'communityCards' => ViceCards::getInLocationOrdered(Locations::festivity(COMMUNITY))->toArray(),
    ];

    return $gamedatas;
  }

  private static function getFestivityObject()
  {
    return [
      'active' => false,
      'runner' => null,
      'passed' => [],
      'round' => 0,
      'rogues' => [
        CUPS => 0,
        PENTACLES => 0,
        FANS => 0,
        HEARTS => 0,
      ],
    ];
  }

  public static function setRogue($suit, $value)
  {
    $festivity = self::get();
    $festivity['rogues'][$suit] = $value;
    Globals::setFestivity($festivity);
  }

  public static function getRogue($suit)
  {
    $festivity = self::get();
    return $festivity['rogues'][$suit];
  }

  public static function getPlayedCards()
  {
    $cards = ViceCards::getInLocation(Locations::festivity(COMMUNITY))->toArray();
    $players = Players::getAll();

    foreach ($players as $player) {
      $cards = array_merge($cards, $player->getCardsPlayedInFestivity());
    }
    return $cards;
  }

  /**
   * Format: ['type' => 'surprise_ball', 'set' => 
   * [
   * $cardValue' => [cardIds] 
   * ]
   */
  public static function setWinningSet($set)
  {
    $festivity = self::get();
    $festivity['winningSet'] = $set;
    Globals::setFestivity($festivity);
  }


  public static function getWinningSet()
  {
    $festivity = self::get();
    return isset($festivity['winningSet']) ? $festivity['winningSet'] : null;
  }
}
