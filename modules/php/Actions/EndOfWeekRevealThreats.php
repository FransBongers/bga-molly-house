<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

class EndOfWeekRevealThreats extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_END_OF_WEEK_REVEAL_THREATS;
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

  public function stEndOfWeekRevealThreats()
  {
    Notifications::phase(clienttranslate('Reveal Threats'));

    $players = Players::getAll();

    

    foreach ($players as $player) {
      $numberOfThreatsRevealed = 0;
      $hand = $player->getHand();

      $revealedInformerToken = $player->getRevealedInformerToken();
      $suitToIgnore = $revealedInformerToken === null ? null : Sites::get($revealedInformerToken->getLocation())->getSuit();

      foreach ($hand as $card) {
        if (!$card->isThreat() || $card->getSuit() === $suitToIgnore) {
          continue;
        }
        
        Notifications::revealThreat($player, $card);

        $card->addToGossip($player);
        $player->expose($card);

        $numberOfThreatsRevealed++;
      }

      if ($numberOfThreatsRevealed > 0) {
        // gain draw token
      }
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
