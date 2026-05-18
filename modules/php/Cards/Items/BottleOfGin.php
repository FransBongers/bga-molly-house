<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class BottleOfGin extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Bottle of Gin');
    $this->text = clienttranslate(
      "Just before scoring the festiviy, you may spend this to let everyone play an extra round (even informers). Don't draw for community."
    );
  }
}