<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Models\Item;

class FestivityPlayDress extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_PLAY_DRESS;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsFestivityPlayDress()
  {
    $info = $this->ctx->getInfo();

    $itemId = $info['itemId'];

    $data = [
      'dress' => Items::get($itemId)
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

  public function actPassFestivityPlayDress()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actFestivityPlayDress($args)
  {
    self::checkAction('actFestivityPlayDress');

    $playDress = $args->playDress;

    $player = $this->getPlayer();
    $item = $this->argsFestivityPlayDress()['dress'];

    if ($playDress) {
      $item->setLocation(PLAYED_DRESSES);
      Stats::incItemsUsed($player->getId(), 1);
      Notifications::playDress($player, $item);
    } else {
      Notifications::message(clienttranslate('${player_name} does not play their ${tkn_boldText_dress}'), [
        'player' => $player,
        'tkn_boldText_dress' => $item->getName(),
        'i18n' => ['tkn_boldText_dress']
      ]);
    }


    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
