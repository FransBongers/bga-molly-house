<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups8 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups8';
    $this->value = 8;
    $this->suit = CUPS;
    $this->joy = 5;
    $this->minPlayers = 4;
  }
}