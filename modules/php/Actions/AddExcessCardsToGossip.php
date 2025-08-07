<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;

class AddExcessCardsToGossip extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_ADD_EXCESS_CARDS_TO_GOSSIP;
  }



  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsAddExcessCardsToGossip()
  {
    $player = $this->getPlayer();
    $hand = $player->getHand();

    $numberToDiscard = count($hand) - 6;

    return [
      '_private' => [
        $player->getId() => [
          'cards' => $hand,

        ],
      ],
      'numberToDiscard' => $numberToDiscard,
    ];
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

  public function actPassAddExcessCardsToGossip()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actAddExcessCardsToGossip($args)
  {
    self::checkAction('actAddExcessCardsToGossip');

    $cardIds = $args->cardIds;

    $stateArgs = $this->argsAddExcessCardsToGossip();

    $player = $this->getPlayer();
    $playerId = $player->getId();

    $cards = [];
    foreach ($cardIds as $cardId) {
      $card = Utils::array_find($stateArgs['_private'][$playerId]['cards'], function ($c) use ($cardId) {
        return $c->getId() === $cardId;
      });
      if ($card === null) {
        throw new \feException("ERROR_009");
      }
      $card->setLocation(GOSSIP_PILE);
      $cards[] = $card;
    }

    Notifications::addExcessCardsToGossip($player, $cards);

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
