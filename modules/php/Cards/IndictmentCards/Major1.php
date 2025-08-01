<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major1 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Major1';
    $this->convictedValue = 4;
    $this->acquittedResult = -3;
    $this->convictedResult = -8;
    $this->text = clienttranslate(
      "Indicted for assaulting a Constable with an Intent to commit the Sin of Sodomy"
    );
  }
}
