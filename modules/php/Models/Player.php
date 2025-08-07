<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Preferences;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
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

    return array_merge(
      $data,
      [
        'hand' => $isCurrentPlayer ? ViceCards::getInLocation(Locations::hand($currentPlayerId))->toArray() : [],
        'reputation' => ViceCards::getInLocationOrdered(Locations::reputation($this->getId()))->toArray(),
        // 'pawn' => Pawns::getPlayerPawn($this),
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
  }

  public function expose($card)
  {
    $suit = $card->getSuit();
    Notifications::message(
      clienttranslate('${player_name} is exposed by ${tkn_boldText_cardValue} of ${tkn_suit}'),
      [
        'player' => $this,
        'tkn_boldText_cardValue' => Notifications::viceCardValueText($card->getValue()),
        'tkn_suit' => $suit,
      ],
    );

    $reputation = $this->getCardsInReputation();
    $numberOfCubes = 0;
    foreach ($reputation as $viceCard) {
      if ($viceCard->getSuit() !== $suit) {
        continue;
      }
      $numberOfCubes += 1;
      $viceCard->addToGossip($this);
    }
    Notifications::gainCubes($this, $suit, $numberOfCubes);
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
}
