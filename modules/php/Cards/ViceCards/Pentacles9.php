<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles9 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles9';
    $this->displayValue = 9;
    $this->suit = PENTACLES;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}