<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups4 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups4';
    $this->type = DESIRE;
    $this->value = 4;
    $this->suit = CUPS;
    $this->joy = 3;
  }
}