<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;
use Bga\Games\MollyHouse\Models\Player;

class EndOfWeekCheckForRaids extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_END_OF_WEEK_CHECK_FOR_RAIDS;
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

  public function stEndOfWeekCheckForRaids()
  {
    $mollyHouses = Sites::getMany(MOLLY_HOUSES);

    foreach ($mollyHouses as $siteId => $mollyHouse) {
      $evidence = $mollyHouse->getEvidence();

      if ($evidence < 7 || $mollyHouse->isRaided()) {
        continue;
      }

      $this->raidMollyHouse($mollyHouse);
      Stats::incMollyHousesRaided(1);

      $this->gainIndictments($mollyHouse);
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

  private function raidMollyHouse($mollyHouse)
  {
    $mollyHouse->setRaided(true);
    $adjacentSites = Sites::getSitesAtDistance([1], $mollyHouse->getId());
    foreach ($adjacentSites as $adjacentSite) {
      $adjacentSite->setDangerousCruising(true);
    }
    $mollyHouse->incEvidence(-7);

    Notifications::endOfWeekMollyHouseRaided(
      $mollyHouse,
      $adjacentSites
    );
  }

  public function gainIndictments($mollyHouse)
  {
    $players = Players::getAll();
    $suit = $mollyHouse->getSuit();
    $playersWhoPlayedDomino = Globals::getPlayersWhoPlayedDomino();

    /**
     * $reputationPlayers
     * key: amount of reputation
     * value: array of player ids
     */
    $reputationPlayers = [];
    foreach ($players as $player) {
      if (in_array($player->getId(), $playersWhoPlayedDomino)) {
        continue;
      }

      $reputation = $player->getReputationForSuit($suit);
      if ($reputation === 0) {
        continue;
      }
      if (isset($reputationPlayers[$reputation])) {
        $reputationPlayers[$reputation][] = $player->getId();
      } else {
        $reputationPlayers[$reputation] = [$player->getId()];
      }
    }

    // array of reputation levels, sorted in descending order
    $reptutationLevels = array_keys($reputationPlayers);
    usort($reptutationLevels, function ($a, $b) {
      return $b - $a; // sort descending
    });

    $playersWhoGainedIndictment = [];

    foreach ($reptutationLevels as $index => $reputation) {
      if ($index > 1) {
        continue;
      }
      foreach ($reputationPlayers[$reputation] as $playerId) {
        $players[$playerId]->gainIndictment($index === 0 ? MAJOR : MINOR);
        $playersWhoGainedIndictment[] = $playerId;
      }
    }

    $playersWhoAlreadyGainedIndictment = Globals::getPlayersWhoGainedIndictment();

    Globals::setPlayersWhoGainedIndictment(array_merge($playersWhoAlreadyGainedIndictment, $playersWhoGainedIndictment));
  }
}
