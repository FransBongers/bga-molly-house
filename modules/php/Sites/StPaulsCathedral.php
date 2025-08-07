<?php

namespace Bga\Games\MollyHouse\Sites;

class StPaulsCathedral extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = ST_PAULS_CATHEDRAL;
    $this->name = clienttranslate("St Paul's Cathedral");
    $this->locationOrder = 1;
    $this->action = CRUISE;
    $this->suit = PENTACLES;
  }
}