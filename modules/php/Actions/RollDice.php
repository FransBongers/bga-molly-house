<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\DieManager;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\SetupCards;
use Bga\Games\MollyHouse\Models\SetupCard;

class RollDice extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_ROLL_DICE;
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



  public function stRollDice()
  {
    $player = $this->getPlayer();
    Stats::incPlayerTurnCount($player->getId(), 1);
    Stats::incTurnCount(1);
    $results = DieManager::rollDice($player);

    foreach ($results as $result) {
      if ($result === MARKET_DISCARD) {
        $action = [
          'action' => RESOLVE_MARKET_DISCARD,
          'playerId' => $player->getId(),
        ];
        $this->ctx->insertAsBrother(Engine::buildTree($action));
      }
    }

    $this->resolveAction(['automatic' => true], true);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
