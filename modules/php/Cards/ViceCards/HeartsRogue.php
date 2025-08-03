<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsRogue extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsRogue';
    $this->type = THREAT;
    $this->value = 'R';
    $this->suit = HEARTS;
    $this->joy = 0;
  }
}