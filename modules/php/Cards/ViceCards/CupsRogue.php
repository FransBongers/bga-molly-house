<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsRogue extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsRogue';
    $this->value = 'R';
    $this->suit = CUPS;
    $this->joy = 0;
  }
}