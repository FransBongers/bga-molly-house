<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans5 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans5';
    $this->value = 5;
    $this->suit = FANS;
    $this->joy = 3;
  }
}