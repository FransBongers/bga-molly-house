<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class Dress extends \Bga\Games\MollyHouse\Models\Item
{
  protected $suit;

  public function __construct($row)
  {
    parent::__construct($row);
  }

  public function isDress()
  {
    return true;
  }
}
