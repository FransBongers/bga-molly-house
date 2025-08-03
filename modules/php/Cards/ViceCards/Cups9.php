<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups9 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups9';
    $this->value = 9;
    $this->suit = CUPS;
    $this->joy = 5;
    $this->minPlayers = 5;
  }
}