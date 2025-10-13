<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Preferences;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\EncounterTokens;
use Bga\Games\MollyHouse\Managers\Indictments;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\JoyMarkers;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\PlayerCubes;
use Bga\Games\MollyHouse\Managers\PlayersExtra;
use Bga\Games\MollyHouse\Managers\Sites;
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
    $encounterTokens = $this->getEncounterTokens();
    $indictments = $this->getIndictments();

    $playerExtra = $this->getExtra();

    return array_merge(
      $data,
      [
        'festivity' => $this->getCardsPlayedInFestivity(),
        'handCardCount' => count($handCards),
        'hand' => $isCurrentPlayer ? $handCards : [],
        'reputation' => ViceCards::getInLocationOrdered(Locations::reputation($this->getId()))->toArray(),
        'cubes' => [
          PENTACLES => $playerExtra->getCubesPentacles(),
          CUPS => $playerExtra->getCubesCups(),
          HEARTS => $playerExtra->getCubesHearts(),
          FANS => $playerExtra->getCubesFans(),
        ],
        'drawTokens' => $playerExtra->getDrawTokens(),
        // 'pawn' => Pawns::getPlayerPawn($this),
        'items' => $this->getItems(),
        'encounterTokens' => $isCurrentPlayer ? $encounterTokens : array_map(function ($token) {
          $serializedTokens = $token->jsonSerialize();
          $serializedTokens['type'] = null;
          return $serializedTokens;
        }, $encounterTokens),
        'indictments' => $isCurrentPlayer ? $indictments : array_map(function ($token) {
          return $token->jsonSerializeAnonymous();
        }, $indictments),
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

  public function drawCards($number, $numberOfDrawTokenToReturn = 0)
  {
    $cards = ViceCards::pickForLocation($number, DECK, Locations::hand($this->getId()))->toArray();

    if (count($cards) > 0) {
      Notifications::drawCards($this, $cards, $numberOfDrawTokenToReturn);
    }

    $drawTokens = $number - count($cards);
    if ($drawTokens > 0) {
      $this->gainDrawTokens($drawTokens);
    }

    // TODO: Add checkpoint
  }

  public function gainDrawTokens($number)
  {
    $this->getExtra()->incDrawTokens($number);
    Notifications::gainDrawTokens($this, $number);
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
    $this->gainCubes($suit, $numberOfCubes);
  }

  public function getCubes()
  {
    $playerExtra = $this->getExtra();
    return
      [
        PENTACLES => $playerExtra->getCubesPentacles(),
        CUPS => $playerExtra->getCubesCups(),
        HEARTS => $playerExtra->getCubesHearts(),
        FANS => $playerExtra->getCubesFans(),
      ];
  }

  public function gainCubes($suit, $numberOfCubes, $take = false)
  {
    $playerExtra = $this->getExtra();
    $methodName = 'incCubes' . ucfirst($suit);
    $playerExtra->$methodName($numberOfCubes);

    Notifications::gainCubes($this, $suit, $numberOfCubes, $take);
  }

  public function getReputationForSuit($suit)
  {
    $reputation = $this->getCubesForSuit($suit);
    $cards = $this->getCardsInReputation();
    foreach ($cards as $card) {
      if ($card->getSuit() === $suit) {
        $reputation += 1;
      }
    }
    return $reputation;
  }

  public function getCubesForSuit($suit)
  {
    $playerExtra = $this->getExtra();
    $method = 'getCubes' . ucfirst($suit);
    return $playerExtra->$method();
  }

  public function getCardsPlayedInFestivity()
  {
    return ViceCards::getInLocationOrdered(Locations::festivity($this->getId()))->toArray();
  }

  public function getItemOfType($type)
  {
    $items = $this->getItems();

    return Utils::array_find($items, fn($item) => $item->getType() === $type);
  }

  public function hasItem($type)
  {
    return $this->getItemOfType($type) !== null;
  }

  public function loseJoy($amount)
  {
    $currentScore = $this->getScore();
    $amount = $amount > $currentScore ? $currentScore : $amount;

    $total = $this->incScore(-$amount);

    $joyMarker = JoyMarkers::getForPlayer($this);

    if ($amount > 0) {
      $joyMarker->setLocation($total);
    }
    Notifications::loseJoy($this, $amount, $total, $joyMarker);
  }

  public function scoreJoy($amount, $notifText = STANDARD)
  {
    $total = $this->incScore($amount);

    $joyMarker = JoyMarkers::getForPlayer($this);
    $joyMarker->setLocation($total);
    Notifications::scoreJoy($this, $amount, $total, $joyMarker, $notifText);
  }


  public function gainIndictment($majorOrMinor)
  {
    $fromLocation = Locations::indicmentDeck($majorOrMinor);
    $indictment = Indictments::getTopOf($fromLocation);
    if ($majorOrMinor === MAJOR) {
      Stats::incMajorIndictments($this->getId(), 1);
    } else {
      Stats::incMinorIndictments($this->getId(), 1);
    }
    if ($indictment === null) {
      if ($majorOrMinor === MAJOR) {
        $this->loseJoy(8);
      } else {
        $this->loseJoy(4);
      }
      return;
    }
    $location = Locations::indictments($this->getId());
    $indictment->setLocation($location);
    Indictments::insertOnTop($indictment->getId(), $location);

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
    foreach ([1, 2] as $spot) {
      $itemInSpot = Items::getInLocation(Locations::item($this->getId(), $spot))->toArray();
      if (count($itemInSpot) > 0) {
        $items[] = $itemInSpot[0];
      }
    }
    return $items;
  }

  public function getEmptyItemSpot()
  {
    foreach ([1, 2] as $spot) {
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

  public function getEncounterTokens()
  {
    return EncounterTokens::getInLocation(Locations::encounterTokens($this->getId()))->toArray();
  }

  public function getExtra()
  {
    return PlayersExtra::get($this->getId());
  }

  public function getDressOfSuit($suit)
  {
    $items = $this->getItems();

    return Utils::array_find(
      $items,
      fn($pItem) =>
      $pItem->isDress() && $pItem->getSuit() === $suit
    );
  }

  public function hang()
  {
    $this->setScore(1);
    $joyMarker = JoyMarkers::getForPlayer($this);
    $joyMarker->setHanged(1);
    Notifications::hang($this, $joyMarker);
  }

  public function scoreVictoryPoints($points)
  {
    $this->incScore($points);
    Notifications::scoreVictoryPoints($this, $points);
  }

  public function getIndictments(): array
  {
    return Indictments::getInLocation(Locations::indictments($this->getId()))->toArray();
  }

  public function becomeRevealedInformer($informerToken)
  {
    Notifications::message(
      clienttranslate('${player_name} becomes a ${tkn_boldText_revealedInformer}'),
      [
        'player' => $this,
        'tkn_boldText_revealedInformer' => clienttranslate('revealed informer'),
        'i18n' => ['tkn_boldText_revealedInformer']
      ]
    );
    Stats::setRevealedInformerPercentage($this->getId(), 100);

    $site = Sites::get($informerToken->getLocation());
    $suit = $site->getSuit();

    $cards = $this->getCardsInReputation();

    foreach ($cards as $card) {
      if ($card->getSuit() === $suit) {
        $card->addToSafePile($this);
      }
    }
  }

  public function getRevealedInformerToken()
  {
    $encounterTokens = EncounterTokens::getAllEncounterTokensForPlayer($this->getId());
    $informerToken = Utils::array_find($encounterTokens, fn($token) => $token->isInformerToken());
    $revealedInformerToken = in_array($informerToken->getLocation(), MOLLY_HOUSES) && $informerToken->isRevealed();
    return $revealedInformerToken ? $informerToken : null;
  }

  public function isRevealedInformer($suit = null)
  {
    $informerToken = $this->getRevealedInformerToken();

    if ($informerToken === null) {
      return false;
    }
    if ($suit !== null) {
      return Sites::get($informerToken->getLocation())->getSuit() === $suit;
    }
    return true;
  }

  public function getPrivateData()
  {

    $handCards =  ViceCards::getInLocation(Locations::hand($this->getId()))->toArray();
    return [
      'hand' => $handCards,
      'encounterTokens' => $this->getEncounterTokens(),
      'indictments' => $this->getIndictments(),
    ];
  }
}
