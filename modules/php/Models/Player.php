<?php

namespace Bga\Games\MollyHouseFrans\Models;

use Bga\Games\MollyHouseFrans\Boilerplate\Core\Preferences;
use Bga\Games\MollyHouseFrans\Boilerplate\Helpers\Locations;


/*
 * Player: all utility functions concerning a player
 */

class Player extends \Bga\Games\MollyHouseFrans\Boilerplate\Helpers\DB_Model
{
  protected $id;

  protected $table = 'player';
  protected $primary = 'player_id';
  protected $attributes = [
    'id' => ['player_id', 'int'],
    'no' => ['player_no', 'int'],
    'avatar' => 'player_avatar',
    'name' => 'player_name',
    'color' => 'player_color',
    'eliminated' => 'player_eliminated',
    'score' => ['player_score', 'int'],
    'scoreAux' => ['player_score_aux', 'int'],
    'zombie' => 'player_zombie',
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

    return array_merge(
      $data,
      [],
    );
  }

  public function getId()
  {
    return (int) parent::getId();
  }
}
