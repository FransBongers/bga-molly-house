<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class DressOfHearts extends \Bga\Games\MollyHouse\Cards\Items\Dress
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Dress of Hearts');
    $this->suit = HEARTS;
    $this->text = clienttranslate(
      'You may play this with a hearts card in a festivity. The Surprise Ball now needs four desires of any numbers matching played dresses. Discard at end.'
    );
  }
}