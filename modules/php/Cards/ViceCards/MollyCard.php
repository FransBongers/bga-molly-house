<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\JoyMarkers;

class MollyCard extends \Bga\Games\MollyHouse\Models\ViceCard
{
  protected $bonusJoy = 2;

  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = MOLLY;
  }

  public function getMostInfamousValue()
  {
    return 10;
  }

  public function scoreBonusJoy($player)
  {
    $bonusJoy = $this->bonusJoy;
    $totalScore = $player->incScore($bonusJoy);
    $joyMarker = JoyMarkers::getForPlayer($this);
    $joyMarker->setLocation($totalScore);
    Notifications::scoreBonusJoy($player, $bonusJoy, $this, $totalScore, $joyMarker);
  }

  public function scoreJoy($playerOrCommunity)
  {
    if ($playerOrCommunity === COMMUNITY) {
      $joyIncrease = 4;
      $joyTotal = Globals::incCommunityJoy($joyIncrease);
      $joyMarker = JoyMarkers::getForPlayerId(COMMUNITY);
      $joyMarker->setLocation($joyTotal);
      Notifications::scoreJoyCommunity($joyIncrease, $joyTotal, $joyMarker);
      return;
    }
  }
}
