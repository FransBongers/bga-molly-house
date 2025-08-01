<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class Bribe extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Bribe');
    $this->text = clienttranslate(
      'As your action, examine the gossip pile and take one card of your choice.'
    );
  }
}