<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts5 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts5';
    $this->type = DESIRE;
    $this->value = 5;
    $this->suit = HEARTS;
    $this->joy = 3;
  }
}