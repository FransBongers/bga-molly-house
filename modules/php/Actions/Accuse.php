<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Community;
use Bga\Games\MollyHouse\Managers\EncounterTokens;
use Bga\Games\MollyHouse\Managers\Pawns;

class Accuse extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_ACCUSE;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsAccuse()
  {
    $info = $this->ctx->getInfo();

    $data = [];

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

  public function actPassAccuse()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actAccuse($args)
  {
    self::checkAction('actAccuse');

    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public function getOptions($player, $site)
  {
    $pawnsOnSite = Pawns::getInLocation($site->getId())->toArray();

    $targets = [];

    $tokensOnBoard = EncounterTokens::getEncounterTokensOnMollyHouses();

    foreach ($pawnsOnSite as $pawn) {
      if ($pawn->isOwnedBy($player)) {
        continue;
      };


      $pawnOwner = $pawn->getOwner();

      foreach ($tokensOnBoard as $token) {
        if ($token->isOwnedBy($pawnOwner->getId()) && $token->isHidden() && $token->isOnMollyHouse()) {
          $targets[$token->getId()] = $token;
        }
      }
    }


    return $targets;
  }

  public function performAction($player, $site, $encounterToken)
  {
    Notifications::message(clienttranslate('${player_name} accuses ${player_name2} at ${tkn_boldText_site}'), [
      'player' => $player,
      'player_name2' => $encounterToken->getOwner()->getName(),
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_site'],
    ]);
    $encounterToken->reveal($player);
    if ($encounterToken->getType() === LOYAL) {
      $player->loseJoy(3);
    } else {
      $player->scoreJoy(3);
      Community::scoreJoy(3);
    }
  }
}
