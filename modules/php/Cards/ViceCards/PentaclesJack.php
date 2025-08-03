<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesJack extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesJack';
    $this->type = MOLLY;
    $this->value = 'J';
    $this->suit = PENTACLES;
    $this->joy = 4;
  }
}