<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsQueen extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsQueen';
    $this->value = 'Q';
    $this->suit = HEARTS;
    $this->joy = 4;
    $this->bonusJoy = 3;
  }
}