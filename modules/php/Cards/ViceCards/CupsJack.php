<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class CupsJack extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'CupsJack';
    $this->type = MOLLY;
    $this->value = 'J';
    $this->suit = CUPS;
    $this->joy = 4;
  }
}