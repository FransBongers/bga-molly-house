<?php

namespace Bga\Games\MollyHouse\Sites;

class MotherClaps extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = MOTHER_CLAPS;
    $this->name = clienttranslate("Mother Clap's");
    $this->locationOrder = 0;
    $this->address = clienttranslate("Field Lane");
    $this->action = THROW_FESTIVITY;
    $this->suit = PENTACLES;
  }
}
