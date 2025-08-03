<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans4 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans4';
    $this->value = 4;
    $this->suit = FANS;
    $this->joy = 3;
  }
}