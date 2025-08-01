<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class Dress extends \Bga\Games\MollyHouse\Models\Item
{
  protected $suit;

  public function __construct($row)
  {
    parent::__construct($row);
    $this->text = clienttranslate(
      'Play alongside a matching card in a festivity. The Surprise Ball is now considered four desires that match any played dress.'
    );
  }
}
