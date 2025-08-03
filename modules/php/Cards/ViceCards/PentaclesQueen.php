<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesQueen extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesQueen';
    $this->type = MOLLY;
    $this->value = 'Q';
    $this->suit = PENTACLES;
    $this->joy = 4;
  }
}