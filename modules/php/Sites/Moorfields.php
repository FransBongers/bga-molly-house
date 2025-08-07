<?php

namespace Bga\Games\MollyHouse\Sites;

class Moorfields extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = MOORFIELDS;
    $this->name = clienttranslate("Moorfields");
    $this->locationOrder = 3;
    $this->action = CRUISE;
    $this->suit = FANS;
  }
}