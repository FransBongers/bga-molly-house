<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major2 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Major2';
    $this->convictedValue = 5;
    $this->acquittedResult = -3;
    $this->convictedResult = -8;
    $this->text = clienttranslate(
      "Indicted for assaulting an Informer, with an Intent to commit that detestable Sin of Sodomy"
    );
  }
}
