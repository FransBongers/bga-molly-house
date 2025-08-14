<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups4 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups4';
    $this->displayValue = 4;
    $this->suit = CUPS;
    $this->joy = 3;
  }
}