<?php

namespace Bga\Games\MollyHouse\Cards\Indictments;

class MajorIndictment extends \Bga\Games\MollyHouse\Models\Indictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = MAJOR;
  }
}
