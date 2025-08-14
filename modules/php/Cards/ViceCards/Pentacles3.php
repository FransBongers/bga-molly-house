<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles3 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles3';
    $this->displayValue = 3;
    $this->suit = PENTACLES;
    $this->joy = 3;
  }
}