<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts9 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts9';
    $this->type = DESIRE;
    $this->value = 9;
    $this->suit = HEARTS;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}