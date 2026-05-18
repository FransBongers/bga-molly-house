<?php

namespace Bga\Games\MollyHouse\Cards\Items;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\ViceCards;

class NewspaperNoticeV2 extends \Bga\Games\MollyHouse\Models\Item
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->name = clienttranslate('Newspaper Notice');
    $this->text = clienttranslate(
      'As your action, you may spend this to add all desires in the market to the gossip pile or all to your reputation (scoring your molly bonuses).'
    );
  }

  public function canBeUsedForAction($site)
  {
    // Can be played if there is at least 1 desire in the market
    return Utils::array_some(array_values(ViceCards::getMarket()), function ($card) {
      return $card->isDesire();
    });
  }

  public function useAction($player, $site)
  {
    Notifications::useItem($player, $this);
    return [
      'action' => NEWSPAPER_NOTICE,
      'playerId' => $player->getId(),
      'itemId' => $this->getId(),
      'siteId' => $site->getId(),
    ];
  }
}
