<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans7 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans7';
    $this->type = DESIRE;
    $this->value = 7;
    $this->suit = FANS;
    $this->joy = 4;
    $this->minPlayers = 3;
  }
}