<?php

namespace Bga\Games\MollyHouse\Sites;

class StJamessPark extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = ST_JAMESS_PARK;
    $this->name = clienttranslate("St James's Park");
    $this->locationOrder = 11;
    $this->action = CRUISE;
  }
}