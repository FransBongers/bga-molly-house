<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\ViceCards;

class ViceCard extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'vice_cards';
  protected $primary = 'card_id';
  protected $location;
  protected $state;
  protected $hidden;

  protected $type;
  protected $suit;
  protected $value;
  protected $joy;
  protected $minPlayers = 1;

  protected $attributes = [
    'id' => ['card_id', 'str'],
    'location' => 'card_location',
    'state' => ['card_state', 'int'],
    'hidden' => ['hidden', 'int'],
  ];

  protected $staticAttributes = [
    'type',
    'suit',
    'value',
    'joy',
    'minPlayers',
  ];
  public function jsonSerialize(): array
  {
    $data = parent::jsonSerialize();
    return array_merge($data, [
      'hidden' => $this->hidden === 1,
    ]);
  }

  public function getUiData()
  {
    // Notifications::log('getUiData card model', []);
    return $this->jsonSerialize(); // Static datas are already in js file
  }

  // public function getSuit()
  // {
  //   return $this->suit;
  // }

  public function isHidden()
  {
    return $this->hidden === 1;
  }

  public function isConstable()
  {
    return $this->value === 'Q';
  }

  public function isDesire()
  {
    return $this->type === DESIRE;
  }

  public function isJack()
  {
    return $this->value === 'J';
  }

  public function isMolly()
  {
    return $this->type === MOLLY;
  }

  public function isRogue()
  {
    return $this->value === 'R';
  }

  public function isThreat()
  {
    return $this->type === THREAT;
  }

  public function isQueen()
  {
    return $this->value === 'Q';
  }

  public function addToGossip($player, $notify = true)
  {
    $state = ViceCards::insertOnTop($this->getId(), GOSSIP_PILE);
    $this->location = GOSSIP_PILE;
    $this->state = $state;
    if ($notify) {
      Notifications::addCardToGossipPile($player, $this);
    }
  }

  public function addToHand($player, $notify = true)
  {
    $location = Locations::hand($player->getId());
    $state = ViceCards::insertOnTop($this->getId(), $location);
    $this->location = $location;
    $this->state = $state;
    if ($notify) {
      Notifications::addCardToHand($player, $this);
    }
  }

  public function addToReputation($player, $notify = true)
  {
    $reputationLocation = Locations::reputation($player->getId());
    $state = ViceCards::insertOnTop($this->getId(), $reputationLocation);
    $this->location = $reputationLocation;
    $this->state = $state;
    if ($notify) {
      Notifications::addCardToReputation($player, $this);
    }
  }

  public function addToSafePile($playerOrCommunity, $notify = true)
  {
    $state = ViceCards::insertOnTop($this->getId(), SAFE_PILE);
    $this->location = SAFE_PILE;
    $this->state = $state;
    if (!$notify) {
      return;
    }

    Notifications::addCardToSafePile($playerOrCommunity, $this);
  }

  public function scoreJoy($playerOrCommunity)
  {
    return;
  }

  public function getMostInfamousValue()
  {
    return $this->value;
  }

  public function insertOnTop($location)
  {
    $this->location = $location;
    $this->state = ViceCards::insertOnTop($this->getId(), $location);
  }

  public function getValueForFestivity()
  {
    if ($this->isDesire()) {
      return $this->value;
    }
    if ($this->isRogue()) {
      return Festivity::getRogue($this->getSuit());
    }
    // Return 0 so that with sorting Jacks and Queens are always at the start
    return 0;
  }
}
