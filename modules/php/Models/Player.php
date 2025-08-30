<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Preferences;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\IndictmentCards;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\PlayerCubes;
use Bga\Games\MollyHouse\Managers\ViceCards;

/*
 * Player: all utility functions concerning a player
 */

class Player extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;

  protected $table = 'player';
  protected $primary = 'player_id';
  protected $attributes = [
    'id' => ['player_id', 'int'],
    'no' => ['player_no', 'int'],
    'avatar' => 'player_avatar',
    'name' => 'player_name',
    'hexColor' => 'player_color',
    'eliminated' => 'player_eliminated',
    'score' => ['player_score', 'int'],
    'scoreAux' => ['player_score_aux', 'int'],
    'zombie' => 'player_zombie',
  ];

  protected $hexColorMap = [
    '8393ca' => BLUE,
    'a2a882' => GREEN,
    'e3bcb4' => PINK,
    '7f5574' => PURPLE,
    'fcd873' => YELLOW,
  ];

  /*
   * Getters
   */
  public function getPref($prefId)
  {
    return Preferences::get($this->id, $prefId);
  }

  public function jsonSerialize($currentPlayerId = null): array
  {
    $data = parent::jsonSerialize();
    $isCurrentPlayer = intval($currentPlayerId) == $this->getId();

    $handCards =  ViceCards::getInLocation(Locations::hand($this->getId()))->toArray();

    return array_merge(
      $data,
      [
        'festivity' => $this->getCardsPlayedInFestivity(),
        'handCardCount' => count($handCards),
        'hand' => $isCurrentPlayer ? $handCards : [],
        'reputation' => ViceCards::getInLocationOrdered(Locations::reputation($this->getId()))->toArray(),
        'cubes' => PlayerCubes::getCubesForPlayer($this->getId()),
        // 'pawn' => Pawns::getPlayerPawn($this),
        'items' => $this->getItems(),
      ],
    );
  }

  public function getId()
  {
    return (int) parent::getId();
  }

  public function getHand()
  {
    return ViceCards::getInLocation(Locations::hand($this->getId()))->toArray();
  }

  public function getCardsInReputation()
  {
    return ViceCards::getInLocation(Locations::reputation($this->getId()))->toArray();
  }

  public function getPawn()
  {
    return Pawns::getPlayerPawn($this);
  }

  public function getColor()
  {
    return $this->hexColorMap[$this->getHexColor()];
  }

  public function drawCards($amount)
  {
    $cards = ViceCards::pickForLocation($amount, DECK, Locations::hand($this->getId()))->toArray();

    Notifications::drawCards($this, $cards);

    $drawTokens = $amount - count($cards);
    if ($drawTokens > 0) {
      Notifications::message(
        clienttranslate('${player_name} gains ${tkn_boldText_drawTokens} draw tokens (TODO)'),
        [
          'player' => $this,
          'tkn_boldText_drawTokens' => $drawTokens
        ],
      );
    }
    // TODO: Add checkpoint
  }

  public function expose($card)
  {
    $suit = $card->getSuit();
    $reputation = $this->getCardsInReputation();

    $numberOfCards = count(Utils::filter($reputation, function ($viceCard) use ($suit) {
      return $viceCard->getSuit() === $suit;
    }));

    if ($numberOfCards === 0) {
      return;
    }

    Notifications::message(
      clienttranslate('${player_name} is exposed by ${tkn_boldText_cardValue} of ${tkn_suit}'),
      [
        'player' => $this,
        'tkn_boldText_cardValue' => Notifications::viceCardValueText($card->getDisplayValue()),
        'tkn_suit' => $suit,
      ],
    );


    $numberOfCubes = 0;
    foreach ($reputation as $viceCard) {
      if ($viceCard->getSuit() !== $suit) {
        continue;
      }
      $numberOfCubes += 1;
      $viceCard->addToGossip($this);
    }
    PlayerCubes::gainCubes($this, $suit, $numberOfCubes);
  }

  public function getReputationForSuit($suit)
  {
    $reputation = PlayerCubes::getReputationForSuit($this->getId(), $suit);
    $cards = $this->getCardsInReputation();
    foreach ($cards as $card) {
      if ($card->getSuit() === $suit) {
        $reputation += 1;
      }
    }
    return $reputation;
  }

  public function getCardsPlayedInFestivity()
  {
    return ViceCards::getInLocationOrdered(Locations::festivity($this->getId()))->toArray();
  }

  public function loseJoy($amount)
  {
    $currentScore = $this->getScore();
    $amount = $amount > $currentScore ? $currentScore : $amount;

    $total = $this->incScore(-$amount);
    Notifications::loseJoy($this, $amount, $total);
  }

  public function scoreJoy($amount)
  {
    $total = $this->incScore($amount);
    Notifications::scoreJoy($this, $amount, $total);
  }


  public function gainIndictment($majorOrMinor)
  {
    $fromLocation = Locations::indicmentDeck($majorOrMinor);
    $indictment = IndictmentCards::getTopOf($fromLocation);
    if ($indictment === null) {
      if ($majorOrMinor === MAJOR) {
        $this->loseJoy(8);
      } else {
        $this->loseJoy(4);
      }
      return;
    }
    $indictment->setLocation(Locations::indictments($this->getId()));

    Notifications::gainIndictment($this, $indictment, $majorOrMinor);
  }

  public function takeCandelabra()
  {
    Globals::setCandelabra($this->getId());
    Notifications::takeCandelabra($this);
  }

  public function getItems()
  {
    $items = [];
    foreach([1,2] as $spot) {
      $itemInSpot = Items::getInLocation(Locations::item($this->getId(), $spot))->toArray();
      if (count($itemInSpot) > 0) {
        $items[] = $itemInSpot[0];
      }
    }
    return $items;
  }

  public function getEmptyItemSpot()
  {
    foreach([1,2] as $spot) {
      $location = Locations::item($this->getId(), $spot);
      $itemInSpot = Items::getInLocation($location)->toArray();
      if (count($itemInSpot) === 0) {
        return $location;
      }
    }
    throw new \feException("ERROR_020");
  }

  public function takeItem($item, $site)
  {
    $location = $this->getEmptyItemSpot();
    $item->setLocation($location);
    Notifications::takeItem($this, $item, $site);
  }
}
