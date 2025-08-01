<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans9 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans9';
    $this->type = DESIRE;
    $this->value = 9;
    $this->suit = FANS;
    $this->joy = 5;
  }
}