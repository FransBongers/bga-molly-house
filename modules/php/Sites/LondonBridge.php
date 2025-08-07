<?php

namespace Bga\Games\MollyHouse\Sites;

class LondonBridge extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = LONDON_BRIDGE;
    $this->name = clienttranslate("London Bridge");
    $this->locationOrder = 7;
    $this->action = CRUISE;
    $this->suit = HEARTS;
  }
}