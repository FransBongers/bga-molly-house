<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Minor2 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Minor2';
    $this->convictedValue = 4;
    $this->acquittedResult = -1;
    $this->convictedResult = -3;
    $this->text = clienttranslate(
      'Indicted for a Misdemeanor in attempting to Commit Sodomy'
    );
  }
}
