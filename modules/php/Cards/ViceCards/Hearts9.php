<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts9 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts9';
    $this->displayValue = 9;
    $this->suit = HEARTS;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}