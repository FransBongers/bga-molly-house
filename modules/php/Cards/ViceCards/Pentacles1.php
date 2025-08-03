<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles1 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles1';
    $this->value = 1;
    $this->suit = PENTACLES;
    $this->joy = 2;
  }
}