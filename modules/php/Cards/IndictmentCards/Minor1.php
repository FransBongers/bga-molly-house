<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Minor1 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 4;
    $this->acquittedResult = -1;
    $this->convictedResult = -3;
    $this->text = clienttranslate(
      'Indicted for a Misdemeanor, for enticeing and endeavouring to commit the foul Sin of Sodomy'
    );
  }
}
