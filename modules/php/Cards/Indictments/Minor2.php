<?php

namespace Bga\Games\MollyHouse\Cards\Indictments;

class Minor2 extends \Bga\Games\MollyHouse\Cards\Indictments\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 4;
    $this->acquittedResult = -1;
    $this->convictedResult = -3;
    $this->text = clienttranslate(
      'Indicted for a Misdemeanor in attempting to Commit Sodomy'
    );
  }
}
