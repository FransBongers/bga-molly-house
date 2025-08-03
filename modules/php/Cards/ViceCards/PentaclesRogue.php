<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesRogue extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesRogue';
    $this->value = 'R';
    $this->suit = PENTACLES;
    $this->joy = 0;
  }
}