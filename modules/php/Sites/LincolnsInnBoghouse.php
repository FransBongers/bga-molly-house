<?php

namespace Bga\Games\MollyHouse\Sites;

class LincolnsInnBoghouse extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = LINCOLNS_INN_BOGHOUSE;
    $this->name = clienttranslate("Lincoln's Inn Boghouse");
    $this->locationOrder = 15;
    $this->action = CRUISE;
    $this->suit = PENTACLES;
  }
}