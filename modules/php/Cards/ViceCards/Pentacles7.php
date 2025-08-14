<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles7 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles7';
    $this->displayValue = 7;
    $this->suit = PENTACLES;
    $this->joy = 4;
    $this->minPlayers = 3;
  }
}