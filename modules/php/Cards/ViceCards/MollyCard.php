<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class MollyCard extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = MOLLY;
  }
}