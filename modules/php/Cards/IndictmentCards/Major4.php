<?php

namespace Bga\Games\MollyHouse\Cards\IndictmentCards;

class Major4 extends \Bga\Games\MollyHouse\Cards\IndictmentCards\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->id = 'Major4';
    $this->convictedValue = 5;
    $this->acquittedResult = -4;
    $this->convictedResult = -10;
    $this->text = clienttranslate(
      "Indicted for feloniously, wickedly, and devilishly assaulting someone with Intent to commit Sodomy"
    );
  }
}
