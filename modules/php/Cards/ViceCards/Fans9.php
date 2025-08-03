<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans9 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans9';
    $this->value = 9;
    $this->suit = FANS;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}