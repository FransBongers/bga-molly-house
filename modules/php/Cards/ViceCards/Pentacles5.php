<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles5 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles5';
    $this->type = DESIRE;
    $this->value = 5;
    $this->suit = PENTACLES;
    $this->joy = 3;
  }
}