<?php

namespace Bga\Games\MollyHouse\Sites;

class LeadenhallStreet extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = LEADENHALL_STREET;
    $this->name = clienttranslate("Leadenhall Street");
    $this->locationOrder = 6;
  }
}