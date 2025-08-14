<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesJack extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesJack';
    $this->displayValue = 'J';
    $this->suit = PENTACLES;
    $this->joy = 4;
  }
}