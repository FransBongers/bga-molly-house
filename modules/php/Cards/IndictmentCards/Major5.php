<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major5 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Major5';
    $this->convictedValue = 8;
    $this->acquittedResult = -5;
    $this->convictedResult = null;
    $this->text = clienttranslate(
      "Indicted for feloniously committing the heinous and detestable Sin of Sodomy"
    );
  }
}
