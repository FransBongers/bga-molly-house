<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles7 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles7';
    $this->type = DESIRE;
    $this->value = 7;
    $this->suit = PENTACLES;
    $this->joy = 4;
  }
}