<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;

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

  // public static function setRound($round)
  // {
  //   $festivity = self::get();
  //   $festivity['round'] = $round;

  //   Globals::setFestivity($festivity);
  // }

  public static function pass($playerId)
  {
    $festivity = self::get();
    $festivity['passed'][] = $playerId;

    Globals::setFestivity($festivity);
  }

  public static function start($player, $siteId)
  {
    $festivity = self::getFestivityObject();
    $festivity['active'] = true;
    $festivity['runner'] = $player->getId();
    $festivity['siteId'] = $siteId;

    Globals::setFestivity($festivity);
  }

  public static function end()
  {
    $festivity = self::get();
    $festivity['active'] = false;
    Globals::setFestivity($festivity);
  }

  public static function getGamedatas()
  {
    $festivity = self::get();
    $gamedatas = [
      'active' => $festivity['active'],
      'runner' => $festivity['runner'],
      'passed' => $festivity['passed'],
      // 'round' => $festivity['round'],
      'communityCards' => ViceCards::getInLocationOrdered(Locations::festivity(COMMUNITY))->toArray(),
      'playedDresses' => Items::getInLocation(PLAYED_DRESSES)->toArray(),
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
      'siteId' => null
    ];
  }

  public static function getSite()
  {
    $festivity = self::get();
    return isset($festivity['siteId']) ? Sites::get($festivity['siteId']) : null;
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

  public static function setupRound($ctx, $round)
  {
    // self::setRound($round);
    if ($round === ADDITIONAL_ROUND) {
      Notifications::phase(
        clienttranslate('Festivity: additional round')
      );
    } else {
      Notifications::phase(
        clienttranslate('Festivity: round ${roundNumber}'),
        [
          'roundNumber' => $round,
        ],
      );
    }


    $festivity = self::get();

    $runnerPlayerId = $festivity['runner'];

    $playerOrder = Players::getTurnOrder($runnerPlayerId);
    $playerOrder = Utils::filter($playerOrder, function ($p) use ($festivity, $round) {
      return $round === ADDITIONAL_ROUND || !in_array($p, $festivity['passed']);
    });


    $nodes = [];

    if ($round !== ADDITIONAL_ROUND) {
      $nodes[] = [
        'action' => FESTIVITY_REVEAL_TOP_CARD_VICE_DECK,
        'playerId' => $runnerPlayerId,
      ];
    }

    $players = Players::getAll();
    $suit = Sites::get($festivity['siteId'])->getSuit();

    foreach ($playerOrder as $playerId) {
      if ($players[$playerId]->isRevealedInformer($suit) && $round !== ADDITIONAL_ROUND) {
        $nodes[] = [
          'action' => FESTIVITY_PASS_AND_PLAY_COMMUNITY_CARD,
          'playerId' => $playerId,
        ];
      } else {
        $nodes[] = [
          'action' => FESTIVITY_PLAY_CARD,
          'playerId' => $playerId,
          'optional' => $round === ADDITIONAL_ROUND || $playerId !== $runnerPlayerId,
        ];
      }
    }

    $ctx->insertAsBrother(Engine::buildTree([
      'children' => $nodes,
    ]));
  }

  public static function revealTopCardViceDeck($player)
  {
    $card = ViceCards::getTopOf(DECK);

    $cardDrawnFromGossipPile = false;

    if ($card === null) {
      ViceCards::shuffle(GOSSIP_PILE);
      $card = ViceCards::getTopOf(GOSSIP_PILE);
      $cardDrawnFromGossipPile = true;
    }

    if ($card === null) {
      // Not sure if this actually can happen
      Notifications::message(clienttranslate('There are no cards left in the vice deck and gossip pile to reveal'), []);
      return;
    }

    $location = Locations::festivity(COMMUNITY);
    ViceCards::insertOnTop($card->getId(), $location);

    $card->setLocation($location);

    Notifications::festivityRevealTopCardViceDeck($player, $card, $cardDrawnFromGossipPile);

    if ($card->isRogue()) {
      $value = bga_rand(0, 9);
      $card->setFestivityValue($value);
      Notifications::festivitySetRogueValue($player, $card, $value, true);
    }
  }
}
