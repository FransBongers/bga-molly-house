<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;

class JoyMarker extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'joy_markers';
  protected $primary = 'joy_marker_id';
  protected $location;
  protected $state;
  protected $hanged;
  protected $color;



  protected $attributes = [
    'id' => ['joy_marker_id', 'str'],
    'location' => 'joy_marker_location',
    'state' => ['joy_marker_state', 'int'],
    'hanged' => ['hanged', 'int'],
    'color' => ['color', 'str'],
  ];

  protected $staticAttributes = [];
  public function jsonSerialize(): array
  {
    $data = parent::jsonSerialize();
    return array_merge($data, [
      'hanged' => $this->hanged === 1,
    ]);
  }

  public function getUiData()
  {
    // Notifications::log('getUiData card model', []);
    return $this->jsonSerialize(); // Static datas are already in js file
  }
}
