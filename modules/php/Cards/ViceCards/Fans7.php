<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans7 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans7';
    $this->displayValue = 7;
    $this->suit = FANS;
    $this->joy = 4;
    $this->minPlayers = 3;
  }
}