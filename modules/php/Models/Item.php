<?php

namespace Bga\Games\MollyHouse\Models;

class Item extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'vice_cards';
  protected $primary = 'card_id';
  protected $location;
  protected $state;
  protected $type;

  protected $name;
  protected $text;

  protected $attributes = [
    'id' => ['card_id', 'str'],
    'location' => 'card_location',
    'state' => ['card_state', 'int'],
    'type' => ['type', 'str'], // Added for Item association
  ];

  protected $staticAttributes = [
    'name',
    'text',
  ];
  public function jsonSerialize(): array
  {
    $data = parent::jsonSerialize();
    return $data;
  }

  public function getUiData()
  {
    // Notifications::log('getUiData card model', []);
    return $this->jsonSerialize(); // Static datas are already in js file
  }

}
