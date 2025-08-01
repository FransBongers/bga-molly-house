<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class DressOfHearts extends \Bga\Games\MollyHouse\Cards\Items\Dress
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Hearts1';
    $this->name = clienttranslate('Dress of Hearts');
    $this->suit = HEARTS;
  }
}