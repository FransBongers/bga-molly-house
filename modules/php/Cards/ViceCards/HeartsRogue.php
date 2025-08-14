<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsRogue extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsRogue';
    $this->displayValue = 'R';
    $this->suit = HEARTS;
    $this->joy = 0;
  }
}