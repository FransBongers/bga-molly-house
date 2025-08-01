<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansConstable extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansConstable';
    $this->type = THREAT;
    $this->value = 0;
    $this->suit = FANS;
    $this->joy = 0;
  }
}