<?php

namespace Bga\Games\MollyHouse\Sites;

class NobleStreet extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = NOBLE_STREET;
    $this->name = clienttranslate("Noble Street");
    $this->locationOrder = 2;
    $this->action = SHOP;
  }
}