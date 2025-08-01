<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles3 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles3';
    $this->type = DESIRE;
    $this->value = 3;
    $this->suit = PENTACLES;
    $this->joy = 3;
  }
}