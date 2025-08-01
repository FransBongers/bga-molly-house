<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class Hearts4 extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts4';
    $this->type = DESIRE;
    $this->value = 4;
    $this->suit = HEARTS;
    $this->joy = 3;
  }
}