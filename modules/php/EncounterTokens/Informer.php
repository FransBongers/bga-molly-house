<?php

namespace Bga\Games\MollyHouse\EncounterTokens;

class Informer extends \Bga\Games\MollyHouse\Models\EncounterToken
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = INFORMER;
  }
}
