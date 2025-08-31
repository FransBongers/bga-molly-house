<?php

namespace Bga\Games\MollyHouse\Cards\Items;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\ViceCards;

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

  public function canBeUsedForAction($site)
  {
    return ViceCards::countInLocation(GOSSIP_PILE) > 0;
  }

  public function useAction($player, $site)
  {
    Notifications::useItem($player, $this);
    return [
      'action' => EXAMINE_GOSSIP_PILE,
      'playerId' => $player->getId(),
      'itemId' => $this->getId(),
    ];
  }
}
