<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsJack extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsJack';
    $this->type = MOLLY;
    $this->value = 'J';
    $this->suit = HEARTS;
    $this->joy = 4;
  }
}