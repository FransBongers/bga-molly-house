<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;

class FestivityScoreJoy extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_SCORE_JOY;
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

  public function stFestivityScoreJoy()
  {
    $winningSet = Festivity::getWinningSet();

    $cardsPerPlayer = [];
    $foiledThreats = [];
    $cards = ViceCards::getMany($winningSet['cardIds']);

    foreach ($cards as $card) {
      if ($card->isThreat()) {
        $foiledThreats[] = $card;
        continue;
      }

      $location = $card->getLocation();
      $playerId = explode('_', $location)[1] ?? null;

      if (!isset($cardsPerPlayer[$playerId])) {
        $cardsPerPlayer[$playerId] = [];
      }

      $cardsPerPlayer[$playerId][] = $card;
    }

    foreach ($cardsPerPlayer as $playerId => $playerCards) {
      usort($playerCards, function ($a, $b) {
        return $a->getFestivityValue() <=> $b->getFestivityValue();
      });

      $playerIsCommunity = $playerId === COMMUNITY;

      $player = null;
      if (!$playerIsCommunity) {
        $player = Players::get($playerId);
      }

      foreach ($playerCards as $card) {
        if ($playerIsCommunity) {
          $card->addToSafePile(COMMUNITY);
          $card->scoreJoy(COMMUNITY);
          continue;
        }

        $card->addToReputation($player);
        $card->scoreJoy($player);
        $card->checkForBonusJoy($player);
      }
    }

    if (count($foiledThreats) === 1) {
      $cardPlayerdById = explode('_', $foiledThreats[0]->getLocation())[1];
      $action = [
        'action' => FESTIVITY_FOIL_THREAT,
        'cardId' => $foiledThreats[0]->getId(),
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    } else if (count($foiledThreats) > 1) {
      $action = [
        'action' => FESTIVITY_CHOOSE_NEXT_FOILED_THREAT,
        'playerId' => Festivity::get()['runner'],
        'cardIds' => Utils::returnIds($foiledThreats),
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
