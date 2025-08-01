<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans8 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans8';
    $this->type = DESIRE;
    $this->value = 8;
    $this->suit = FANS;
    $this->joy = 5;
  }
}