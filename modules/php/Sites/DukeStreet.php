<?php

namespace Bga\Games\MollyHouse\Sites;

class DukeStreet extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = DUKE_STREET;
    $this->name = clienttranslate("Duke Street");
    $this->locationOrder = 14;
    $this->action = SHOP;
  }
}