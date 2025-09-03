<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Minor8 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 8;
    $this->acquittedResult = -4;
    $this->convictedResult = -10;
    $this->text = clienttranslate(
      "Indicted for Sodomitical Practices at a Tavern"
    );
  }
}
