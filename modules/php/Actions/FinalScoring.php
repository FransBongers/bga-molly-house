<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\EncounterTokens;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;


class FinalScoring extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FINAL_SCORING;
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


  public function stFinalScoring()
  {
    Notifications::phase(clienttranslate('Final Scoring'));
    $info = $this->ctx->getInfo();
    $gameEndType = $info['gameEndType'];

    switch ($gameEndType) {
      case COMMUNITY_INFILTRATION:
        $this->communityInfiltration();
        break;
      case COMMUNITY_SURVIVAL:
        $this->communitySurvival();
        break;
      case COMMUNITY_ATROPHY:
        $this->communityAtrophy();
        break;
      default:
        throw new \feException("ERROR_030");
    }


    Game::get()->gamestate->jumpToState(ST_END_GAME);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public function communityAtrophy()
  {
    $players = Players::getAll();

    foreach ($players as $player) {
      $player->setScore(0);
    }

    Notifications::communityAtrophy();
  }

  public function communityInfiltration()
  {
    $players = Players::getAll();

    foreach ($players as $player) {
      $data = $this->revealEncounterTokens($player);
      $siteWithInformerToken = $data['siteWithInformerToken'];

      if ($siteWithInformerToken === null || $siteWithInformerToken->isOpen()) {
        $player->hang();
      } else {
        $player->loseJoy($player->getScore());
        $raidedHouse = $siteWithInformerToken;
        $evidenceAtLocation = $raidedHouse->getEvidence();
        $pointsForEvidence = $evidenceAtLocation * 2;
        $pointsForSuits = $this->getInformerReputationScore($players, $player->getId(), $raidedHouse->getSuit());
        $player->scoreVictoryPoints($pointsForEvidence + $pointsForSuits);
      }
    }

    // TODO: if players are tied for score they lose
  }

  private function getInformerReputationScore($players, $informerId, $suit)
  {
    $reputationScore = 0;

    // plus two victory
    // points for each reputation point of all other players
    // that matches that house
    foreach ($players as $player) {
      if ($player->getId() === $informerId) {
        continue;
      }
      $reputationScore += $player->getReputationForSuit($suit) * 2;
    }

    foreach (SUITS as $sId) {
      $reputationScore -= $players[$informerId]->getReputationForSuit($sId);
    }

    return $reputationScore;
  }

  public function communitySurvival()
  {
    $players = Players::getAll();
    $playerOrder = Players::getTurnOrder();
    $sites = Sites::getAll();

    foreach ($playerOrder as $playerId) {
      $player = $players[$playerId];
      $data = $this->revealEncounterTokens($player);
      $siteWithInformerToken = $data['siteWithInformerToken'];
      $encounterTokensOnSites = $data['encounterTokensOnSites'];
      $successfulInformer = $siteWithInformerToken !== null && $siteWithInformerToken->isRaided();

      if ($successfulInformer) {
        // Pardon successful informers 
        $indictments = $player->getIndictments();
        Notifications::message(clienttranslate('${player_name} has successfully collaborated with the Society'), [
          'player' => $player
        ]);
        foreach ($indictments as $indictment) {
          $indictment->discard($player);
        }
        foreach ($encounterTokensOnSites as $token) {
          if ($token->isLoyalToken()) {
            $token->discard($player);
          }
        }
      } else if ($siteWithInformerToken !== null) {
        // Prosecute failed informers
        Notifications::message(clienttranslate('${player_name} is punished by the Society for their failure to collaborate'), [
          'player' => $player
        ]);
        $player->gainIndictment(MAJOR);
      }

      if (!$successfulInformer) {
        // Score loyal tokens
        $joy = 0;
        foreach ($encounterTokensOnSites as $token) {

          if ($token->isLoyalToken() && $sites[$token->getLocation()]->isOpen()) {
            $joy += 2;
          }
        }
        if ($joy > 0) {
          $player->scoreJoy($joy, SCORE_LOYAL_TOKENS);
        }
      }

      $indictments = $player->getIndictments();

      foreach ($indictments as $indictment) {
        $hanged = $indictment->faceTrial($player);
        if ($hanged) {
          break;
        }
      }
    }
  }

  // Returns null or the site with the informer token
  private function revealEncounterTokens($player)
  {
    $sites = Sites::getAll();

    $siteWithInformerToken = null;
    $encounterTokensOnSites = [];
    $encounterTokens = EncounterTokens::getAllEncounterTokensForPlayer($player->getId());
    foreach ($encounterTokens as $token) {
      if (!$token->isOnMollyHouse()) {
        continue;
      }
      $encounterTokensOnSites[] = $token;
      if ($token->isHidden()) {
        $token->reveal($player);
      }

      if ($token->isInformerToken()) {
        $siteWithInformerToken = $sites[$token->getLocation()];
      }
    }
    return [
      'siteWithInformerToken' => $siteWithInformerToken,
      'encounterTokensOnSites' => $encounterTokensOnSites
    ];
  }
}
