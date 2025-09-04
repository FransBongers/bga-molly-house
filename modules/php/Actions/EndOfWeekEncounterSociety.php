<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\Pawns;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Models\Site;

class EndOfWeekEncounterSociety extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_END_OF_WEEK_ENCOUNTER_SOCIETY;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsEndOfWeekEncounterSociety()
  {
    $info = $this->ctx->getInfo();
    $activePlayerIds = $info['activePlayerIds'];

    $players = Players::getAll();

    $data = [
      '_private' => [],
    ];

    foreach ($activePlayerIds as $playerId) {
      $pawnLocation = Pawns::getPlayerPawn($players[$playerId])->getLocation();

      $encounterTokens = $players[$playerId]->getEncounterTokens();
      $data['_private'][$playerId] = [
        'encounterTokens' => $encounterTokens,
        'site' => $this->getClosestOpenMollyHouse($pawnLocation),
      ];
    }

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

  public function actPassEndOfWeekEncounterSociety()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actEndOfWeekEncounterSociety($args)
  {
    self::checkAction('actEndOfWeekEncounterSociety');
    $encounterTokenId = $args->encounterTokenId;


    $player = Players::getCurrent();
    $stateArgs = $this->argsEndOfWeekEncounterSociety();
    $playerArgs = $stateArgs['_private'][$player->getId()];

    $encounterToken = Utils::array_find($playerArgs['encounterTokens'], function ($token) use ($encounterTokenId) {
      return $token->getId() == $encounterTokenId;
    });

    if ($encounterToken === null) {
      throw new \feException("ERROR_032");
    }

    $encounterToken->placeOnSite($player, $playerArgs['site']);
    $game = Game::get();
    $game->gamestate->setPlayerNonMultiactive($player->getId(), 'next');

    if (count($game->gamestate->getActivePlayerList()) > 0) {
      return;
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

  public function getClosestOpenMollyHouse($siteId)
  {

    $closestOpenToClockwise = $this->getClosestOpenInDirection($siteId, true);
    $closestOpenToCounterClockwise = $this->getClosestOpenInDirection($siteId, false);

    if ($closestOpenToClockwise['distance'] <= $closestOpenToCounterClockwise['distance']) {
      return $closestOpenToClockwise['site'];
    }
    return $closestOpenToCounterClockwise['site'];
  }

  private function getClosestOpenInDirection($siteId, $clockwise)
  {
    $sites = Sites::getAll();
    $startIndex =  Utils::array_find_index(SITES, function ($sId) use ($siteId) {
      return $sId === $siteId;
    });
    $closestOpen = null;

    $step = $clockwise ? 1 : -1;
    $currentPosition = $startIndex;

    $numberOfSites = count($sites);
    while ($closestOpen === null) {
      $currentPosition = ($currentPosition + $step + $numberOfSites) % $numberOfSites;
      $currentSite = $sites[SITES[$currentPosition]];

      if ($currentSite->isMollyHouse() && $currentSite->isOpen()) {
        $closestOpen = $currentSite;
      }

      if ($currentPosition === $startIndex) {
        break;
      }
    }

    if ($closestOpen !== null) {
      $distance = ($clockwise
        ? ($currentPosition - $startIndex + count($sites))
        : ($startIndex - $currentPosition + count($sites))
      ) % count($sites);
      return [
        'site' => $closestOpen,
        'distance' => $distance,
      ];
    }
    return null;
  }
}
