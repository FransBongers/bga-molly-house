<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsJack extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsJack';
    $this->displayValue = 'J';
    $this->suit = CUPS;
    $this->joy = 4;
  }
}