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

class FestivityFoilThreat extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_FOIL_THREAT;
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

  public function stFestivityFoilThreat()
  {
    $info = $this->ctx->getInfo();
    $playerId = $this->ctx->getPlayerId();

    $card = ViceCards::get($info['cardId']);
    $playerOrCommunity = $playerId === COMMUNITY ? COMMUNITY : Players::get($playerId);
    $card->foilThreat($playerOrCommunity);

    $suit = $card->getSuit();
    if ($playerId === COMMUNITY) {
      $playerOrder = Players::getTurnOrder(Festivity::get()['runnerId']);
      $action = [
        'children' => array_map(
          function ($playerId) use ($suit) {
            return [
              'action' => FESTIVITY_FOIL_THREAT_ADD_TO_SAFE_PILE,
              'playerId' => $playerId,
              'suit' => $suit,
            ];
          },
          $playerOrder
        ),
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    } else {
      $action = [
        'action' => FESTIVITY_FOIL_THREAT_ADD_TO_SAFE_PILE,
        'playerId' => $playerId,
        'suit' => $suit,
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
