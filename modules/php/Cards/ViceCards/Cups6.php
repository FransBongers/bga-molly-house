<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups6 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups6';
    $this->type = DESIRE;
    $this->value = 6;
    $this->suit = CUPS;
    $this->joy = 4;
  }
}