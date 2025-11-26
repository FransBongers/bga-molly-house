<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;
use Bga\Games\MollyHouse\Models\Site;

class FestivityBottleOfGinCheck extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_BOTTLE_OF_GIN_CHECK;
  }

  // ..######..########....###....########.########
  // .##....##....##......##.##......##....##......
  // .##..........##.....##...##.....##....##......
  // ..######.....##....##.....##....##....######..
  // .......##....##....#########....##....##......
  // .##....##....##....##.....##....##....##......
  // ..######.....##....##.....##....##....########

  // ....###.....######..########.####..#######..##....##
  // ...##.##...##....##....##.....##..##.....##.###...##
  // ..##...##..##..........##.....##..##.....##.####..##
  // .##.....##.##..........##.....##..##.....##.##.##.##
  // .#########.##..........##.....##..##.....##.##..####
  // .##.....##.##....##....##.....##..##.....##.##...###
  // .##.....##..######.....##....####..#######..##....##


  public function stFestivityBottleOfGinCheck()
  {
    $items = Items::getAll();

    $bottlesOfGinInPlay = [];
    $festivitySiteId = Festivity::get()['siteId'];
    $suitOfSite = Sites::get($festivitySiteId)->getSuit();

    foreach ($items as $item) {
      if ($item->getType() === BOTTLE_OF_GIN && Utils::startsWith($item->getLocation(), 'item_')) {
        $owner = Players::get($item->getOwnerId());
        if ($owner->isRevealedInformer($suitOfSite)) {
          continue;
        }
        $bottlesOfGinInPlay[] = $item;
      }
    }

    if (count($bottlesOfGinInPlay) > 0) {
      $action = [
        'action' => FESTIVITY_USE_BOTTLE_OF_GIN,
        'playerId' => 'some',
        'activePlayerIds' => array_map(fn($i) => $i->getOwnerId(), $bottlesOfGinInPlay),
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    }

    $this->resolveAction(['automatic' => true]);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
