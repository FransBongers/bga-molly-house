<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;

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
  protected $suit = null;

  protected $attributes = [
    'id' => ['item_id', 'str'],
    'location' => 'item_location',
    'state' => ['item_state', 'int'],
    'type' => ['type', 'str'],
  ];

  protected $staticAttributes = [
    'name',
    'text',
    'suit',
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

  public function canBeUsedForAction($site)
  {
    return false;
  }

  public function useAction($player, $site)
  {
    throw new \feException("ERROR_022");
  }

  public function getOwnerId()
  {
    if (!Utils::startsWith($this->getLocation(), 'item_')) {
      throw new \feException("ERROR_027");
    }
    return intval(explode('_', $this->getLocation())[2]);
  }

  public function isDress()
  {
    return false;
  }
}
