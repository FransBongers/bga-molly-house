<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups5 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups5';
    $this->value = 5;
    $this->suit = CUPS;
    $this->joy = 3;
  }
}