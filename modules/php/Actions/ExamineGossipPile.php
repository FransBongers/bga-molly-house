<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\ViceCards;

class ExamineGossipPile extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_EXAMINE_GOSSIP_PILE;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsExamineGossipPile()
  {
    $info = $this->ctx->getInfo();

    $playerId = $this->ctx->getPlayerId();

    $data = [
      '_private' => [
        $playerId => ViceCards::getInLocation(GOSSIP_PILE),
      ]
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

  public function actPassExamineGossipPile()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actExamineGossipPile($args)
  {
    self::checkAction('actExamineGossipPile');
    $cardId = $args->cardId;

    $card = ViceCards::get($cardId);
    if ($card->getLocation() !== GOSSIP_PILE) {
      throw new \feException("ERROR_024");
    }
    $player = $this->getPlayer();
    $card->addToHand($player, false);

    Notifications::addCardFromGossipPile($player, $card);

    $item = Items::get($this->ctx->getInfo()['itemId']);
    $item->discard($player);

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
