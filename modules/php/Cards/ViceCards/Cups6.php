<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups6 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups6';
    $this->displayValue = 6;
    $this->suit = CUPS;
    $this->joy = 4;
  }
}