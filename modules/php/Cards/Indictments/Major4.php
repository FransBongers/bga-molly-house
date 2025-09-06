<?php

namespace Bga\Games\MollyHouse\Cards\Indictments;

class Major4 extends \Bga\Games\MollyHouse\Cards\Indictments\MajorIndictment
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->convictedValue = 5;
    $this->acquittedResult = -4;
    $this->convictedResult = -10;
    $this->text = clienttranslate(
      "Indicted for feloniously, wickedly, and devilishly assaulting someone with Intent to commit Sodomy"
    );
  }
}
