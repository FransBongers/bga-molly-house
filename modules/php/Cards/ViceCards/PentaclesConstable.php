<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class PentaclesConstable extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'PentaclesConstable';
    $this->type = THREAT;
    $this->value = 'C';
    $this->suit = PENTACLES;
    $this->joy = 0;
  }
}