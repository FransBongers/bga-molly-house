<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class ThreatCard extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = THREAT;
  }
}