<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups8 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups8';
    $this->type = DESIRE;
    $this->value = 8;
    $this->suit = CUPS;
    $this->joy = 5;
  }
}