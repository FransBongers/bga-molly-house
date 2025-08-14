<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsQueen extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsQueen';
    $this->displayValue = 'Q';
    $this->suit = CUPS;
    $this->joy = 4;
    $this->bonusJoy = 3;
  }
}