<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major8 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 6;
    $this->acquittedResult = -6;
    $this->convictedResult = null;
    $this->text = clienttranslate(
      "Indicted for committing Buggery"
    );
  }
}
