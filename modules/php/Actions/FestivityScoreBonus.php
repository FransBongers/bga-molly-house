<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Community;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

class FestivityScoreBonus extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_SCORE_BONUS;
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

  public function stFestivityScoreBonus()
  {
    Notifications::phase(clienttranslate('Festivity: bonuses'));

    $festivity = Festivity::get();
    $player = Players::get($festivity['runner']);

    $pawn = $player->getPawn();

    $site = Sites::get($pawn->getLocation());

    $suit = $site->getSuit();
    $reputationForSuit = $player->getReputationForSuit($suit);

    $ranking = $festivity['winningSet']['ranking'];

    if ($reputationForSuit > 0) {
      switch ($ranking) {
        case SURPRISE_BALL:
        case SURPRISE_BALL_WITH_DRESS:
        case CHRISTENING:
        case DANCE:
          $player->scoreJoy($reputationForSuit);
          break;
        case QUIET_GATHERING:
          $player->loseJoy($reputationForSuit);
          break;
      }
    } else {
      Notifications::message(clienttranslate('${player_name} does not score any joy'), [
        'player' => $player,
      ]);
    }


    switch ($ranking) {
      case SURPRISE_BALL:
      case SURPRISE_BALL_WITH_DRESS:
        Community::scoreJoy(3);
        break;
      case CHRISTENING:
        Community::scoreJoy(2);
        break;
      case DANCE:
        Community::scoreJoy(1);
        break;
      case QUIET_GATHERING:
        Community::loseJoy(1);
        break;
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
