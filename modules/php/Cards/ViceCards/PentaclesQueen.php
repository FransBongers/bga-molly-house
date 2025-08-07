<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesQueen extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesQueen';
    $this->value = 'Q';
    $this->suit = PENTACLES;
    $this->joy = 4;
    $this->bonusJoy = 3;
  }
}