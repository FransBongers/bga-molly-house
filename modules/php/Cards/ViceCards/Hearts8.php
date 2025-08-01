<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts8 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts8';
    $this->type = DESIRE;
    $this->value = 8;
    $this->suit = HEARTS;
    $this->joy = 5;
  }
}