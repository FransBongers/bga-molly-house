<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans3 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans3';
    $this->displayValue = 3;
    $this->suit = FANS;
    $this->joy = 3;
  }
}