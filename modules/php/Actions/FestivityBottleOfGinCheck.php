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
use Bga\Games\MollyHouse\Managers\ViceCards;


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

    foreach ($items as $item) {
      if ($item->getType() === BOTTLE_OF_GIN && Utils::startsWith($item->getLocation(), 'item_')) {
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
