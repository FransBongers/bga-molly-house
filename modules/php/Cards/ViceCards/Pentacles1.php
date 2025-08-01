<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles1 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles1';
    $this->type = DESIRE;
    $this->value = 1;
    $this->suit = PENTACLES;
    $this->joy = 2;
  }
}