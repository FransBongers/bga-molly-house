<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;

class EncounterToken extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'encounter_tokens';
  protected $primary = 'token_id';
  protected $location;
  protected $state;
  protected $hidden;
  protected $type;
  protected $color;





  protected $attributes = [
    'id' => ['token_id', 'str'],
    'location' => 'token_location',
    'state' => ['token_state', 'int'],
    'type' => ['type', 'str'],
    'hidden' => ['hidden', 'int'],
    'color' => ['color', 'str'],
  ];

  protected $staticAttributes = [];
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

  public function isOwnedBy($playerId)
  {
    return $this->getOwnerId() == $playerId;
  }

  public function isHidden()
  {
    return $this->hidden === 1;
  }

  public function isOnMollyHouse()
  {
    return in_array($this->getLocation(), MOLLY_HOUSES);
  }

  public function getOwner()
  {
    return Players::get($this->getOwnerId());
  }

  public function getOwnerId()
  {
    return intval(explode('_', $this->getId())[1]);
  }

  public function placeOnSite($player, $site, $faceUp = false)
  {
    $this->setLocation($site->getId());
    if ($faceUp) {
      $this->setHidden(0);
    }
    Notifications::placeEncounterToken($player, $site, $this);
  }

  public function reveal($player)
  {
    $this->setHidden(0);
    $site = Sites::get($this->getLocation());
    Notifications::revealEncounterToken($player, $site, $this);
  }
}
