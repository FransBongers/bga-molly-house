<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Sites;

class DiscardItem extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_DISCARD_ITEM;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsDiscardItem()
  {
    $info = $this->ctx->getInfo();

    $items = $this->getPlayer()->getItems();

    $items[] = Items::get($info['takenItemId']);

    $data = [
      'items' => $items,
    ];

    return $data;
  }

  //  .########..##..........###....##....##.########.########.
  //  .##.....##.##.........##.##....##..##..##.......##.....##
  //  .##.....##.##........##...##....####...##.......##.....##
  //  .########..##.......##.....##....##....######...########.
  //  .##........##.......#########....##....##.......##...##..
  //  .##........##.......##.....##....##....##.......##....##.
  //  .##........########.##.....##....##....########.##.....##

  // ....###.....######..########.####..#######..##....##
  // ...##.##...##....##....##.....##..##.....##.###...##
  // ..##...##..##..........##.....##..##.....##.####..##
  // .##.....##.##..........##.....##..##.....##.##.##.##
  // .#########.##..........##.....##..##.....##.##..####
  // .##.....##.##....##....##.....##..##.....##.##...###
  // .##.....##..######.....##....####..#######..##....##

  public function actPassDiscardItem()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actDiscardItem($args)
  {
    self::checkAction('actDiscardItem');
    $itemId = $args->itemId;

    $stateArgs = $this->argsDiscardItem();
    $item = Utils::array_find($stateArgs['items'], fn($i) => $i->getId() == $itemId);

    if ($item === null) {
      throw new \feException("ERROR_021");
    }

    $item->discard($this->getPlayer());

    $takenItemId = $this->ctx->getInfo()['takenItemId'];

    if ($item->getId() !== $takenItemId) {
      $takenItem = Utils::array_find($stateArgs['items'], fn($i) => $i->getId() == $takenItemId);
      $site = Sites::get($takenItem->getLocation());
      $this->getPlayer()->takeItem($takenItem, $site);
    }

    $this->resolveAction([]);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
