<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts3 extends \Bga\Games\MollyHouse\Cards\ViceCards\DesireCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts3';
    $this->value = 3;
    $this->suit = HEARTS;
    $this->joy = 3;
  }
}