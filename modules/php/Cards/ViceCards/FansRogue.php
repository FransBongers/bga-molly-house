<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansRogue extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansRogue';
    $this->type = THREAT;
    $this->value = 0;
    $this->suit = FANS;
    $this->joy = 0;
  }
}