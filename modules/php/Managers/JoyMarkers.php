<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\GameFramework\Notify;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Models\Player;

class JoyMarkers extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'joy_markers';
  protected static $prefix = 'joy_marker_';
  protected static $customFields = [
    'color',
    'hanged'
  ];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($pawn)
  {
    return self::getCardInstance($pawn['joy_marker_id'], $pawn);
  }

  public static function getCardInstance($id, $data = null)
  {
    $className = "\Bga\Games\MollyHouse\Models\JoyMarker";
    return new $className($data);
  }

  public static function getStaticUiData()
  {
    $pieces = self::getAll()->toArray();

    $data = [];
    foreach ($pieces as $index => $piece) {
      $data[$piece->getId()] = $piece->getStaticData();
    }
    return $data;
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  private static function setupLoadJoyMarkers()
  {
    $joyMarkers = [];

    $players = Players::getAll();

    foreach ($players as $playerId => $player) {
      $joyMarkerId = 'joyMarker_' . $player->getId();
      $joyMarkers[$joyMarkerId] = [
        'id' => $joyMarkerId,
        'location' => 0,
        'state' => 0,
        'hanged' => 0,
        'color' => $player->getColor(),
      ];
    }

    $communityId = 'joyMarker_' . COMMUNITY;
    $joyMarkers[$communityId] = [
      'id' => $communityId,
      'location' => 0,
      'state' => 0,
      'hanged' => 0,
      'color' => BLACK,
    ];

    self::create($joyMarkers, null);
  }

  public static function setupNewGame($players = null, $options = null)
  {
    self::setupLoadJoyMarkers();
  }

  public static function getForPlayer($player)
  {
    return self::get('joyMarker_' . $player->getId());
  }

  public static function getForPlayerId($playerId)
  {
    return self::get('joyMarker_' . $playerId);
  }
}
