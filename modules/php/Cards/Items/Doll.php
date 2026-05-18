<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class Doll extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Doll');
    $this->text = clienttranslate(
      "As festivity runner, you may spend this when you play your first card. This festivity will be a Quiet Gathering, but doesn't make you or the community lose joy."
    );
  }
}
