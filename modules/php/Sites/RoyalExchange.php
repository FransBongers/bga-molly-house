<?php

namespace Bga\Games\MollyHouse\Sites;

class RoyalExchange extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = ROYAL_EXCHANGE;
    $this->name = clienttranslate("Royal Exchange");
    $this->locationOrder = 5;
    $this->action = CRUISE;
    $this->suit = CUPS;
    $this->suit = FANS;
  }
}