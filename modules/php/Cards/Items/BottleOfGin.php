<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class BottleOfGin extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Bottle of Gin');
    $this->text = clienttranslate(
      'Just before the festivity is selected, all players may play an extra round.'
    );
  }
}