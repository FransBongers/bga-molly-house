<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class DressOfPentacles extends \Bga\Games\MollyHouse\Cards\Items\Dress
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Dress of Pentacles');
    $this->suit = PENTACLES;
  }
}