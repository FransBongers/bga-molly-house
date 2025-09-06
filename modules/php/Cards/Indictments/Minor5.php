<?php

namespace Bga\Games\MollyHouse\Cards\Indictments;

class Minor5 extends \Bga\Games\MollyHouse\Cards\Indictments\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 5;
    $this->acquittedResult = -2;
    $this->convictedResult = -4;
    $this->text = clienttranslate(
      'Indicted for a Assaulting a Person unknown, with an intent to commit the Sin of Sodomy'
    );
  }
}
