<?php

namespace Bga\Games\MollyHouse\Sites;

class OldRoundCourt extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = OLD_ROUND_COURT;
    $this->name = clienttranslate("Old Round Court");
    $this->locationOrder = 9;
  }
}