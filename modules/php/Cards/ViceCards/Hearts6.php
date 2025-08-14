<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts6 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts6';
    $this->displayValue = 6;
    $this->suit = HEARTS;
    $this->joy = 4;
  }
}