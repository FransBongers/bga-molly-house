<?php

namespace Bga\Games\MollyHouse\Sites;

class JuliusCesarTaylors extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = JULIUS_CESAR_TAYLORS;
    $this->name = clienttranslate("Julius Cesar Taylor's");
    $this->locationOrder = 12;
    $this->address = clienttranslate("Tottenham Court Road");
    $this->action = THROW_FESTIVITY;
    $this->suit = CUPS;
  }
}