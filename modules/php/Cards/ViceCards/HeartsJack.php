<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class HeartsJack extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'HeartsJack';
    $this->displayValue = 'J';
    $this->suit = HEARTS;
    $this->joy = 4;
  }
}