<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts8 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts8';
    $this->value = 8;
    $this->suit = HEARTS;
    $this->joy = 5;
    $this->minPlayers = 4;
  }
}