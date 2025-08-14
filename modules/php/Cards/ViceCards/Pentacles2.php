<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles2 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles2';
    $this->displayValue = 2;
    $this->suit = PENTACLES;
    $this->joy = 2;
  }
}