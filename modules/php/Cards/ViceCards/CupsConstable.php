<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsConstable extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsConstable';
    $this->type = THREAT;
    $this->value = 'C';
    $this->suit = CUPS;
    $this->joy = 0;
  }
}