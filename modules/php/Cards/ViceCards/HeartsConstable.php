<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsConstable extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsConstable';
    $this->type = THREAT;
    $this->value = 0;
    $this->suit = HEARTS;
    $this->joy = 0;
  }
}