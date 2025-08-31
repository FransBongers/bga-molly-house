<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\GameFramework\Notify;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;



class EncounterTokens extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'encounter_tokens';
  protected static $prefix = 'token_';
  protected static $customFields = [
    'type',
    'hidden',
  ];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($card)
  {
    return self::getCardInstance($card['token_id'], $card);
  }

  public static function getCardInstance($id, $data = null)
  {
    // $prefix = self::getClassPrefix($id);
    $type = $data['type'];

    $className = "\Bga\Games\MollyHouse\EncounterTokens\\$type";
    return new $className($data);
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

    $tokens = [];

    $distribution = [LOYAL, LOYAL, LOYAL, INFORMER];

    foreach ($players as $player) {
      shuffle($distribution);
      $playerId = $player->getId();

      for ($i = 0; $i <= 3; $i++) {
        $tokenId = implode('_', ['encounterToken', $playerId, $i]);
        $tokens[$tokenId] = [
          'id' => $tokenId,
          'type' => $distribution[$i],
          'hidden' => 1,
          'location' => Locations::encounterTokens($playerId)
        ];
      }
    }

    // Create the tokens
    self::create($tokens, null);
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

  public static function getEncounterTokensOnMollyHouses($currentPlayerId)
  {
    $tokens = Utils::filter(self::getAll()->toArray(), function ($token) {
      return in_array($token->getLocation(), MOLLY_HOUSES);
    });
    return array_map(function ($token) use ($currentPlayerId) {
      $isOwnedByCurrentPlayer = $token->isOwnedBy($currentPlayerId);
      $serializedToken = $token->jsonSerialize();
      if (!$isOwnedByCurrentPlayer && $token->isHidden()) {
        $serializedToken['type'] = null;
      }
      return $serializedToken;
    }, $tokens);
  }
}
