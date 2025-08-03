<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Fans2 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Fans2';
    $this->value = 2;
    $this->suit = FANS;
    $this->joy = 2;
  }
}