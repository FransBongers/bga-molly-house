<?php

namespace Bga\Games\MollyHouse\Sites;

class SukeyBevells extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = SUKEY_BEVELLS;
    $this->name = clienttranslate("Sukey Bevell's");
    $this->locationOrder = 8;
    $this->address = clienttranslate("The Mint");
  }
}