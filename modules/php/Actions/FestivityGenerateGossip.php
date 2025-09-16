<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;

class FestivityGenerateGossip extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_GENERATE_GOSSIP;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsFestivityGenerateGossip()
  {
    $cards = Festivity::getPlayedCards();

    $data = [
      'cards' => $cards,
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

  public function actPassFestivityGenerateGossip()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actFestivityGenerateGossip($args)
  {
    self::checkAction('actFestivityGenerateGossip');

    $cardId = $args->cardId;

    $cards = $this->argsFestivityGenerateGossip()['cards'];

    $card = Utils::array_find($cards, function ($c) use ($cardId) {
      return $c->getId() === $cardId;
    });

    if ($card === null) {
      throw new \feException("ERROR_016");
    }

    $player = $this->getPlayer();

    $playerThatPlayerCardId = explode('_', $card->getLocation())[1];

    $card->addToGossip($player, false);

    if ($playerThatPlayerCardId !== COMMUNITY) {
      Players::get($playerThatPlayerCardId)->drawCards(1);
    }
    if ($card->isThreat()) {
      $this->exposePlayers($card, $playerThatPlayerCardId);
    }

    $remainingCards = count(Festivity::getPlayedCards());
    if ($remainingCards > 0) {
      $action = [
        'action' => FESTIVITY_GENERATE_GOSSIP,
        'playerId' => $player->getId(),
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
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

  private function exposePlayers($card, $playerThatPlayerCardId)
  {
    if ($playerThatPlayerCardId === COMMUNITY) {
      // Community card, expose all players
      foreach (Players::getAll() as $player) {
        $player->expose($card);
      }
      return;
    }
    Players::get($playerThatPlayerCardId)->expose($card);
  }
}
