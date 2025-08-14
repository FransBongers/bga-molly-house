<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansRogue extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansRogue';
    $this->displayValue = 'R';
    $this->suit = FANS;
    $this->joy = 0;
  }
}