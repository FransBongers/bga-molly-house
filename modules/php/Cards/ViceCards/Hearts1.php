<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts1 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts1';
    $this->value = 1;
    $this->suit = HEARTS;
    $this->joy = 2;
  }
}