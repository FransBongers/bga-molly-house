<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class DressOfFans extends \Bga\Games\MollyHouse\Cards\Items\Dress
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Dress of Fans');
    $this->suit = FANS;
  }
}