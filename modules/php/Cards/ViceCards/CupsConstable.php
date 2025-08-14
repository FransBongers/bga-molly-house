<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsConstable extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsConstable';
    $this->displayValue = 'C';
    $this->suit = CUPS;
    $this->joy = 0;
  }
}