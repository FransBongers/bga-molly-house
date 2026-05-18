<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class DominoV2 extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Domino');
    $this->text = clienttranslate(
      'You may spend this when you play a vice card in a festivity. Swap that vice card with a community card of matching suit.'
    );
  }
}