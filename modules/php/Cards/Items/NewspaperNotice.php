<?php

namespace Bga\Games\MollyHouse\Cards\Items;

class NewspaperNotice extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Newspaper Notice');
    $this->text = clienttranslate(
      'As your action, if you are at an open house, place an encounter token face up there and add all matching market cards to the gossip pile, resolving any threats as if discarded from the market. Furthermore, if you placed a loyal encounter token, score two joy for each card added to gossip.'
    );
  }
}
