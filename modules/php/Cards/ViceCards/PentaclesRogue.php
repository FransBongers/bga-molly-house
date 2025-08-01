<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesRogue extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesRogue';
    $this->type = THREAT;
    $this->value = 0;
    $this->suit = PENTACLES;
    $this->joy = 0;
  }
}