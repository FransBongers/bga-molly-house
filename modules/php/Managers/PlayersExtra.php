<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Models\PlayerExtra;

class PlayersExtra extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'players_extra';
  protected static $prefix = 'player_extra_';
  protected static $customFields = [
    'cubes_cups',
    'cubes_pentacles',
    'cubes_fans',
    'cubes_hearts',
    'draw_tokens',
  ];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($card)
  {
    return self::getCardInstance($card['player_extra_id'], $card);
  }

  public static function getCardInstance($id, $data = null)
  {
    return new PlayerExtra($data);
  }

  /**
   * getStaticUiData : return static data
   */
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


  private static function setupLoadTokens()
  {
    $players = Players::getAll();

    $data = [];

    foreach ($players as $player) {
      $playerId = $player->getId();
      $data[$playerId] = [
        'id' => $playerId,
        'location' => 'game',
        'cubes_cups' => 0,
        'cubes_pentacles' => 0,
        'cubes_fans' => 0,
        'cubes_hearts' => 0,
        'draw_tokens' => 0,
      ];
    }

    // Create the tokens
    self::create($data, null);
  }



  public static function setupNewGame($players = null, $options = null)
  {
    self::setupLoadTokens();
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

}
