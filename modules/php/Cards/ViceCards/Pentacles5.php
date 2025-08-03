<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Pentacles5 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Pentacles5';
    $this->value = 5;
    $this->suit = PENTACLES;
    $this->joy = 3;
  }
}