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

  public function scoreJoy($player)
  {
    $player->incScore($this->getJoy());
    Notifications::scoreJoy($player, $this->getJoy());
  }
}