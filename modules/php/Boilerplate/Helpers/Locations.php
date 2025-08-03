<?php

namespace Bga\Games\MollyHouse\Boilerplate\Helpers;

class Locations
{

  public static function indicmentDeck($type)
  {
    return 'deck_' . $type;
  }

  public static function hand($playerId)
  {
    return 'hand_' . $playerId;
  }

  public static function reputation($playerId)
  {
    return 'reputation_' . $playerId;
  }
}
