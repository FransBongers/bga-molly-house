<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;


class EncounterToken extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'encounter_tokens';
  protected $primary = 'token_id';
  protected $location;
  protected $state;
  protected $hidden;
  protected $festivityValue;

  protected $type;
  protected $suit;
  protected $displayValue;
  protected $joy;
  protected $minPlayers = 1;

  protected $attributes = [
    'id' => ['token_id', 'str'],
    'location' => 'token_location',
    'state' => ['token_state', 'int'],
    'type' => ['type', 'str'],
    'hidden' => ['hidden', 'int'],
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
}
