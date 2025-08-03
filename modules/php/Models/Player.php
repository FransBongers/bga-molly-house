<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Preferences;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Managers\ViceCards;

/*
 * Player: all utility functions concerning a player
 */

class Player extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
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
      [
        'hand' => $isCurrentPlayer ? ViceCards::getInLocation(Locations::hand($currentPlayerId))->toArray() : [],
        'reputation' => ViceCards::getInLocationOrdered(Locations::reputation($this->getId()))->toArray(),
      ],
    );
  }

  public function getId()
  {
    return (int) parent::getId();
  }

  public function getHand()
  {
    return ViceCards::getInLocation(Locations::hand($this->getId()))->toArray();
  }

  public function getReputation()
  {
    return ViceCards::getInLocation(Locations::reputation($this->getId()))->toArray();
  }
}
