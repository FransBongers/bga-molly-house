<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;

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
    $player->incScore($bonusJoy);
    Notifications::scoreBonusJoy($player, $bonusJoy, $this);
  }

  public function scoreJoy($playerOrCommunity)
  {
    if ($playerOrCommunity === COMMUNITY) {
      $joyIncrease = 4;
      $joyTotal = Globals::incCommunityJoy($joyIncrease);
      Notifications::scoreJoyCommunity($joyIncrease, $joyTotal);
      return;
    }
  }
}
