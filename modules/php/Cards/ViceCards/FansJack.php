<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansJack extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansJack';
    $this->type = MOLLY;
    $this->value = 0;
    $this->suit = FANS;
    $this->joy = 4;
  }
}