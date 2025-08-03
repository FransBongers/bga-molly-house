<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansJack extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansJack';
    $this->value = 'J';
    $this->suit = FANS;
    $this->joy = 4;
  }
}