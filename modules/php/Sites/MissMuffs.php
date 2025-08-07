<?php

namespace Bga\Games\MollyHouse\Sites;

class MissMuffs extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = MISS_MUFFS;
    $this->name = clienttranslate("Miss Muff's");
    $this->locationOrder = 4;
    $this->address = clienttranslate("Black Lion Yard");
    $this->action = THROW_FESTIVITY;
    $this->suit = FANS;
  }
}