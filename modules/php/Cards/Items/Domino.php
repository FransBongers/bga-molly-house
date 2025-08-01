<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class Domino extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Domino');
    $this->text = clienttranslate(
      'Play before revealing gossip at the end of the week. Your reputation is ignored during raids.'
    );
  }
}