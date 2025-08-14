<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans8 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans8';
    $this->displayValue = 8;
    $this->suit = FANS;
    $this->joy = 5;
    $this->minPlayers = 4;
  }
}