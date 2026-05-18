<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\ViceCards;

class NewspaperNotice extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_NEWSPAPER_NOTICE;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsNewspaperNotice()
  {
    // $args = $this->ctx->getArgs();

    $market = ViceCards::getMarket();
    $desiresInMarket = array_values(array_filter($market, function ($card) {
      return $card->isDesire();
    }));
    usort($desiresInMarket, function ($a, $b) {
      return $a->getLocation() <=> $b->getLocation();
    });

    $data = [
      'desires' => $desiresInMarket
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

  public function actPassNewspaperNotice()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actNewspaperNotice($args)
  {
    self::checkAction('actNewspaperNotice');

    $addTo = $args->addTo;
    if (!in_array($addTo, [GOSSIP_PILE, REPUTATION])) {
      throw new \Bga\GameFramework\VisibleSystemException("ERROR_033");
    }

    $stateArgs = $this->argsNewspaperNotice();

    $player = self::getPlayer();

    foreach ($stateArgs['desires'] as $desire) {
      if ($addTo === GOSSIP_PILE) {
        $desire->addToGossip($player);
      } else if ($addTo === REPUTATION) {
        $desire->addToReputation($player);
      }
    }

    $item = Items::get($this->ctx->getInfo()['itemId']);
    $item->discard($player);


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
