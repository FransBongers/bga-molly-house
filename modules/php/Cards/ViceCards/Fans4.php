<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans4 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans4';
    $this->type = DESIRE;
    $this->value = 4;
    $this->suit = FANS;
    $this->joy = 3;
  }
}