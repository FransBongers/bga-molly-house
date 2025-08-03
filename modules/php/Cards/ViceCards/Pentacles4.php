<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles4 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles4';
    $this->value = 4;
    $this->suit = PENTACLES;
    $this->joy = 3;
  }
}