<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsQueen extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsQueen';
    $this->type = MOLLY;
    $this->value = 0;
    $this->suit = CUPS;
    $this->joy = 4;
  }
}