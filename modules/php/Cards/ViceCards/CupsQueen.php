<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsQueen extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsQueen';
    $this->value = 'Q';
    $this->suit = CUPS;
    $this->joy = 4;
  }
}