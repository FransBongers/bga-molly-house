<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsRogue extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsRogue';
    $this->type = THREAT;
    $this->value = 'R';
    $this->suit = CUPS;
    $this->joy = 0;
  }
}