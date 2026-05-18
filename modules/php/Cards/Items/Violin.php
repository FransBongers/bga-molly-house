<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class Violin extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Violin');
    $this->text = clienttranslate(
      'Anytime during a festivity, you may spend this to draw two more cards for the community.'
    );
  }
}