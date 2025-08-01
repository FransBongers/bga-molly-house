<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts7 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts7';
    $this->type = DESIRE;
    $this->value = 7;
    $this->suit = HEARTS;
    $this->joy = 4;
    $this->minPlayers = 3;
  }
}