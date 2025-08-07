<?php

namespace Bga\Games\MollyHouse\Sites;

class CannonStreet extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = CANNON_STREET;
    $this->name = clienttranslate("Cannon Street");
    $this->locationOrder = 10;
    $this->action = SHOP;
  }
}