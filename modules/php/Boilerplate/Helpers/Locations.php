<?php

namespace Bga\Games\MollyHouse\Boilerplate\Helpers;

class Locations
{

  public static function indicmentDeck($type)
  {
    return 'deck_' . $type;
  }

  // Player id or community
  public static function festivity($playerId)
  {
    return 'festivity_' . $playerId;
  }

  public static function hand($playerId)
  {
    return 'hand_' . $playerId;
  }

  public static function reputation($playerId)
  {
    return 'reputation_' . $playerId;
  }

  public static function indictments($playerId)
  {
    return 'indictments_' . $playerId;
  }

  public static function item($playerId, $spot)
  {
    return 'item_' . $spot . '_' . $playerId;
  }

  public static function encounterTokens($playerId)
  {
    return 'encounterTokens_' . $playerId;
  }

  public static function evidence($cardOrThreat, $suit)
  {
    return 'evidence_' . $cardOrThreat . '_' . $suit;
  }
}
