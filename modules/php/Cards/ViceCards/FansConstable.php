<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansConstable extends \Bga\Games\MollyHouse\Cards\ViceCards\ThreatCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansConstable';
    $this->value = 'C';
    $this->suit = FANS;
    $this->joy = 0;
  }
}