<?php

namespace Bga\Games\MollyHouse\Cards\Indictments;

class Major1 extends \Bga\Games\MollyHouse\Cards\Indictments\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 4;
    $this->acquittedResult = -3;
    $this->convictedResult = -8;
    $this->text = clienttranslate(
      "Indicted for assaulting a Constable with an Intent to commit the Sin of Sodomy"
    );
  }
}
