<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Minor7 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MinorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Minor7';
    $this->convictedValue = 6;
    $this->acquittedResult = -3;
    $this->convictedResult = -8;
    $this->text = clienttranslate(
      "Indicted for keeping a House in which she procur'd and encourag'd Persons to commit Sodomy"
    );
  }
}
