<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;

class PlayerExtra extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'players_extra';
  protected $primary = 'player_extra_id';
  protected $location;
  protected $state;
  protected $cubesCups;
  protected $cubesPentacles;
  protected $cubesFans;
  protected $cubesHearts;
  protected $drawTokens;

  protected $attributes = [
    'id' => ['player_extra_id', 'str'],
    'location' => 'player_extra_location',
    'state' => ['player_extra_state', 'int'],
    'cubesCups' => ['cubes_cups', 'int'],
    'cubesPentacles' => ['cubes_pentacles', 'int'],
    'cubesFans' => ['cubes_fans', 'int'],
    'cubesHearts' => ['cubes_hearts', 'int'],
    'drawTokens' => ['draw_tokens', 'int'],
  ];

  protected $staticAttributes = [];
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
