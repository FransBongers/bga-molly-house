<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles8 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles8';
    $this->displayValue = 8;
    $this->suit = PENTACLES;
    $this->joy = 5;
    $this->minPlayers = 4;
  }
}