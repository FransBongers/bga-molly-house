<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsQueen extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsQueen';
    $this->type = MOLLY;
    $this->value = 'Q';
    $this->suit = HEARTS;
    $this->joy = 4;
  }
}