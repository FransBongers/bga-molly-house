<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

class FansQueen extends \Bga\Games\MollyHouse\Cards\ViceCards\MollyCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'FansQueen';
    $this->value = 'Q';
    $this->suit = FANS;
    $this->joy = 4;
  }
}