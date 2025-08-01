<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts3 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts3';
    $this->type = DESIRE;
    $this->value = 3;
    $this->suit = HEARTS;
    $this->joy = 3;
  }
}