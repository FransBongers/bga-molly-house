<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class MinorIndictment extends \Bga\Games\MollyHouse\Models\IndictmentCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = MINOR;
  }
}
