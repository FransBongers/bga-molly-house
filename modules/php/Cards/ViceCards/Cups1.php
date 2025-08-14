<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups1 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups1';
    $this->displayValue = 1;
    $this->suit = CUPS;
    $this->joy = 2;
  }
}
