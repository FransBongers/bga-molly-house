<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major3 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Major3';
    $this->convictedValue = 5;
    $this->acquittedResult = -4;
    $this->convictedResult = -10;
    $this->text = clienttranslate(
      "Indicted for a Misdemeanor, found in such indecent Postures as plainly betrayed Sodomitical Practices"
    );
  }
}
