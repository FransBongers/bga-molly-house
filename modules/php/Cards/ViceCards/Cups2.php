<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups2 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups2';
    $this->displayValue = 2;
    $this->suit = CUPS;
    $this->joy = 2;
  }
}