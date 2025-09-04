<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;

class Community
{

  public static function scoreJoy($joyIncrease)
  {
    $joyTotal = Globals::incCommunityJoy($joyIncrease);
    $joyMarker = JoyMarkers::getForPlayerId(COMMUNITY);
    $joyMarker->setLocation($joyTotal);
    Notifications::scoreJoyCommunity($joyIncrease, $joyTotal, $joyMarker);
  }

  public static function loseJoy($joyDecrease)
  {
    $currentJoy = Globals::getCommunityJoy();
    $joyDecrease = $joyDecrease > $currentJoy ? $currentJoy : $joyDecrease;
    $joyTotal = Globals::incCommunityJoy(-$joyDecrease);
    $joyMarker = JoyMarkers::getForPlayerId(COMMUNITY);
    $joyMarker->setLocation($joyTotal);
    Notifications::loseJoyCommunity($joyDecrease, $joyTotal, $joyMarker);
  }

  public static function getJoy()
  {
    return Globals::getCommunityJoy();
  }
}
