<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major6 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 8;
    $this->acquittedResult = -5;
    $this->convictedResult = -null;
    $this->text = clienttranslate(
      "Indicted for that they not having God before their Eyes, did commit Buggery"
    );
  }
}
