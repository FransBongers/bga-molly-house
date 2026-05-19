<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;
use Bga\Games\MollyHouse\Models\Player;

class UseDress extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_USE_DRESS;
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


  public function stUseDress()
  {
    $itemId = $this->ctx->getArgs()['itemId'];
    $item = Items::get($itemId);

    $player = $this->getPlayer();

    $item->setLocation(PLAYED_ITEMS_FESTIVITY);
    Stats::incItemsUsed($player->getId(), 1);
    Notifications::playItemToFestivity($player, $item);

    $this->resolveAction(['automatic' => true]);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  // .########.##....##..######...####.##....##.########
  // .##.......###...##.##....##...##..###...##.##......
  // .##.......####..##.##.........##..####..##.##......
  // .######...##.##.##.##...####..##..##.##.##.######..
  // .##.......##..####.##....##...##..##..####.##......
  // .##.......##...###.##....##...##..##...###.##......
  // .########.##....##..######...####.##....##.########

  public function getDescription(): string|array
  {
    $item = Items::get($this->ctx->getArgs()['itemId']);

    return [
      'log' => clienttranslate('Play ${itemName}'),
      'args' => [
        'itemName' => $item->getName(),
      ],
    ];
  }

  public function isDoable(Player $player): bool
  {
    $args = $this->ctx->getArgs();


    return true;
  }

  public function isAutomatic(?Player $player = null): bool
  {
    return true;
  }
}
