<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major7 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Major7';
    $this->convictedValue = 6;
    $this->acquittedResult = -6;
    $this->convictedResult = null;
    $this->text = clienttranslate(
      "Indicted for committing Sodomy"
    );
  }
}
