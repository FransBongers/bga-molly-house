<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts1 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts1';
    $this->type = DESIRE;
    $this->value = 1;
    $this->suit = HEARTS;
    $this->joy = 2;
  }
}