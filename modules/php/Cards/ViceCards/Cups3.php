<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Cups3 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Cups3';
    $this->value = 3;
    $this->suit = CUPS;
    $this->joy = 3;
  }
}