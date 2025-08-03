<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans6 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans6';
    $this->value = 6;
    $this->suit = FANS;
    $this->joy = 4;
  }
}