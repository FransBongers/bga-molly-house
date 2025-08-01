<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles9 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles9';
    $this->type = DESIRE;
    $this->value = 9;
    $this->suit = PENTACLES;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}