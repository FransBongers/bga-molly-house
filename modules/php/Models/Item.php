<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;

class Item extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'items';
  protected $primary = 'item_id';
  protected $location;
  protected $state;
  protected $type;

  protected $name = '';
  protected $text;

  protected $attributes = [
    'id' => ['item_id', 'str'],
    'location' => 'item_location',
    'state' => ['item_state', 'int'],
    'type' => ['type', 'str'],
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

  public function discard($player = null)
  {
    $this->setLocation(DISCARD);

    Notifications::discardItem($player, $this);
  }
}
