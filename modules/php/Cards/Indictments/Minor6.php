<?php

namespace Bga\Games\MollyHouse\Cards\Indictments;

class Minor6 extends \Bga\Games\MollyHouse\Cards\Indictments\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 6;
    $this->acquittedResult = -3;
    $this->convictedResult = -8;
    $this->text = clienttranslate(
      "Indicted for keeping a disorderly House, and entertaining wicked abandon'd Sodomites"
    );
  }
}
