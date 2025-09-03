<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Minor4 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 5;
    $this->acquittedResult = -2;
    $this->convictedResult = -4;
    $this->text = clienttranslate(
      'Indicted for assault, with an Intent to commit that detestable Sin of Sodomy'
    );
  }
}
