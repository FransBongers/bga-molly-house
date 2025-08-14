<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups7 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups7';
    $this->displayValue = 7;
    $this->suit = CUPS;
    $this->joy = 4;
    $this->minPlayers = 3;
  }
}