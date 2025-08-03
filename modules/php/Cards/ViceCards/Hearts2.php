<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts2 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts2';
    $this->value = 2;
    $this->suit = HEARTS;
    $this->joy = 2;
  }
}