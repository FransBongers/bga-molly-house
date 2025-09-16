<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\Community;
use Bga\Games\MollyHouse\Managers\JoyMarkers;

class DesireCard extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = DESIRE;
  }

  // public function addToReputation($player, $notify = true)
  // {
  //   parent::addToReputation($player, $notify);
  //   // $this->scoreBonusJoy($player);
  // }

  public function scoreJoy($playerOrCommunity)
  {
    if ($playerOrCommunity === COMMUNITY) {
      Community::scoreJoy($this->getJoy());
      return;
    }

    $total = $playerOrCommunity->incScore($this->getJoy());

    $joyMarker = JoyMarkers::getForPlayer($playerOrCommunity);
    $joyMarker->setLocation($total);

    Notifications::scoreJoy($playerOrCommunity, $this->getJoy(), $total, $joyMarker);

    // $this->scoreBonusJoy($playerOrCommunity);
  }

  public function checkForBonusJoy($player)
  {
    $reptution = $player->getCardsInReputation();
    foreach ($reptution as $card) {
      if ($card->getSuit() === $this->getSuit() && in_array($card->getDisplayValue(), ['J', 'Q'])) {
        $card->scoreBonusJoy($player);
      }
    }
  }
}
