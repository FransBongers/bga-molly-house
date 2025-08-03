<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans1 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans1';
    $this->value = 1;
    $this->suit = FANS;
    $this->joy = 2;
  }
}