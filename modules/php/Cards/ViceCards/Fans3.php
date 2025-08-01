<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans3 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans3';
    $this->type = DESIRE;
    $this->value = 3;
    $this->suit = FANS;
    $this->joy = 3;
  }
}