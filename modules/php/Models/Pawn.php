<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;

class Pawn extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'pawns';
  protected $primary = 'pawn_id';
  protected $location;
  protected $state;
  protected $type;

  protected $name;
  protected $text;

  protected $attributes = [
    'id' => ['pawn_id', 'str'],
    'location' => 'pawn_location',
    'state' => ['pawn_state', 'int'],
  ];

  protected $staticAttributes = [];
  public function jsonSerialize(): array
  {
    $data = parent::jsonSerialize();

    return array_merge($data, [
      'color' => $this->getColor(),
    ]);
  }

  public function getUiData()
  {
    // Notifications::log('getUiData card model', []);
    return $this->jsonSerialize(); // Static datas are already in js file
  }

  public function place($player, $location, $notify = true)
  {
    $this->setLocation($location);
    if (!$notify) {
      return;
    }
    Notifications::placePawn(
      $player,
      $this
    );
  }

  public function move($player, $location, $notify = true)
  {
    $from = $this->getLocation();
    $this->setLocation($location);
    if (!$notify) {
      return;
    }
    Notifications::movePawn(
      $player,
      $this,
      $from,
    );
  }

  public function getColor()
  {
    return explode('_', $this->getId())[1];
  }
}
