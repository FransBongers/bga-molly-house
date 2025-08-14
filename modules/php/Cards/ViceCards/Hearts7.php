<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts7 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts7';
    $this->displayValue = 7;
    $this->suit = HEARTS;
    $this->joy = 4;
    $this->minPlayers = 3;
  }
}