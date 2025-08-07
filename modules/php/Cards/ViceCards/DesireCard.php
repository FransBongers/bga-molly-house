<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;

class DesireCard extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = DESIRE;
  }

  public function addToReputation($player, $notify = true)
  {
    parent::addToReputation($player, $notify);
    $this->scoreJoy($player);
  }

  public function scoreJoy($player)
  {
    $player->incScore($this->getJoy());
    Notifications::scoreJoy($player, $this->getJoy());

    $reptution = $player->getCardsInReputation();
    foreach ($reptution as $card) {
      if ($card->getSuit() === $this->getSuit() && in_array($card->getValue(), ['J', 'Q'])) {
        $card->scoreBonusJoy($player);
      }
    }
  }
}
