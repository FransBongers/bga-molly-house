<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\GameFramework\Notify;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Models\Player;

class Pawns extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'pawns';
  protected static $prefix = 'pawn_';
  protected static $customFields = [];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($pawn)
  {
    return self::getCardInstance($pawn['pawn_id'], $pawn);
  }

  public static function getCardInstance($id, $data = null)
  {
    $className = "\Bga\Games\MollyHouse\Models\Pawn";
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

  public static function getPlayerPawn(Player $player)
  {
    $pawnId = 'pawn_' . $player->getColor();
    return self::get($pawnId);
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  private static function setupLoadPawns()
  {
    $pawns = [];

    $players = Players::getAll();

    foreach ($players as $playerId => $player) {
      $pawnId = 'pawn_' . $player->getColor();
      $pawns[$pawnId] = [
        'id' => $pawnId,
        'location' => SUPPLY,
      ];
    }

    self::create($pawns, null);
  }

  public static function setupNewGame($players = null, $options = null)
  {
    self::setupLoadPawns();
  }
}
