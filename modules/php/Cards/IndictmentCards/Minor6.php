<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Minor6 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MinorIndictment
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
