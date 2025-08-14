<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles6 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles6';
    $this->displayValue = 6;
    $this->suit = PENTACLES;
    $this->joy = 4;
  }
}