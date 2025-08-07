<?php

namespace Bga\Games\MollyHouse\Sites;

class CoventGardenPiazza extends \Bga\Games\MollyHouse\Models\Site
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = COVENT_GARDEN_PIAZZA;
    $this->name = clienttranslate("Covent Garden Piazza");
    $this->locationOrder = 13;
    $this->action = CRUISE;
    $this->suit = CUPS;
  }
}