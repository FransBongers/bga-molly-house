<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups9 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups9';
    $this->type = DESIRE;
    $this->value = 9;
    $this->suit = CUPS;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}