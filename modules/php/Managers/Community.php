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
    Notifications::scoreJoyCommunity($joyIncrease, $joyTotal);
  }

  public static function loseJoy($joyDecrease)
  {
    $currentJoy = Globals::getCommunityJoy();
    $joyDecrease = $joyDecrease > $currentJoy ? $currentJoy : $joyDecrease;
     $joyTotal = Globals::incCommunityJoy(-$joyDecrease);
    Notifications::loseJoyCommunity($joyDecrease, $joyTotal);
  }
}
