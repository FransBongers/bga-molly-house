<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesConstable extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesConstable';
    $this->displayValue = 'C';
    $this->suit = PENTACLES;
    $this->joy = 0;
  }
}