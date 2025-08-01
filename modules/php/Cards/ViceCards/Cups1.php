<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups1 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups1';
    $this->type = DESIRE;
    $this->value = 1;
    $this->suit = CUPS;
    $this->joy = 2;
  }
}
