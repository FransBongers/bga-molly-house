<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Community;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

class EndOfWeekCheckGameEnd extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  protected $communitMarkerThreshold = [
    1 => 30,
    2 => 35,
    3 => 35,
    4 => 40,
    5 => 25,
  ];

  public function getState()
  {
    return ST_END_OF_WEEK_CHECK_GAME_END;
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

  public function stEndOfWeekCheckGameEnd()
  {
    if ($this->communityInfiltration()) {
      $this->triggerGameEnd(COMMUNITY_INFILTRATION);
      Stats::setGameEnd(0);
      Stats::setGameEndPercentageCommunityInfiltration(100);
      return;
    }

    if ($this->communitySurvival()) {
      $this->triggerGameEnd(COMMUNITY_SURVIVAL);
      Stats::setGameEnd(1);
      Stats::setGameEndPercentageCommunitySurvival(100);
      return;
    }

    if ($this->communityAtrophy()) {
      $this->triggerGameEnd(COMMUNITY_ATROPHY);
      Stats::setGameEnd(2);
      Stats::setGameEndPercentageCommunityAtrophy(100);
      return;
    }

    $action = [
      'action' => END_OF_WEEK_CLEANUP,
    ];
    $this->ctx->insertAsBrother(Engine::buildTree($action));

    $this->checkEncounterTheSociety();


    $this->resolveAction(['automatic' => true], true);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private function triggerGameEnd($gameEndType)
  {

    $gameEndTypeText = [
      COMMUNITY_INFILTRATION => clienttranslate('Community Infiltration'),
      COMMUNITY_SURVIVAL => clienttranslate('Community Survival'),
      COMMUNITY_ATROPHY => clienttranslate('Community Atrophy'),
    ];

    Notifications::message(clienttranslate('The game ends with ${tkn_boldText_gameEndType}'), [
      'tkn_boldText_gameEndType' => $gameEndTypeText[$gameEndType],
    ]);

    $action = [
      'action' => FINAL_SCORING,
      'gameEndType' => $gameEndType,
    ];
    $this->ctx->insertAsBrother(Engine::buildTree($action));

    $this->resolveAction(['automatic' => true], true);
  }

  private function checkEncounterTheSociety()
  {
    $playersWhoGainedIndictment =  array_values(array_unique(Globals::getPlayersWhoGainedIndictment()));

    if (count($playersWhoGainedIndictment) === 0) {
      return;
    }

    $players = Players::getAll();

    $playersWhoGainedIndictment = Utils::filter($playersWhoGainedIndictment, function ($playerId) use ($players) {
      $encounterTokens = $players[$playerId]->getEncounterTokens();
      return count($encounterTokens) > 0;
    });

    if (count($playersWhoGainedIndictment) > 0) {
      $action = [
        'action' => END_OF_WEEK_ENCOUNTER_SOCIETY,
        'playerId' => 'some',
        'activePlayerIds' => $playersWhoGainedIndictment,

      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    }
  }

  /**
   * If all four houses have been raided or a raided house has accumulated
   * seven or more evidence, the game ends with Community Infiltration.
   */
  private function communityInfiltration()
  {
    $mollyHouses = Sites::getMany(MOLLY_HOUSES);

    $housesRaidedCount = 0;
    $raidedHouseWithEvidence = false;

    foreach ($mollyHouses as $siteId => $mollyHouse) {
      $evidence = $mollyHouse->getEvidence();

      $isRaided = $mollyHouse->isRaided();

      if ($isRaided) {
        $housesRaidedCount++;
      }
      if ($isRaided && $evidence >= 7) {
        $raidedHouseWithEvidence = true;
      }
    }

    return $raidedHouseWithEvidence || $housesRaidedCount === 4;
  }

  /**
   * Otherwise, if the community joy marker has reached or exceeded
   * the game end threshold for your player count, the game ends with
   * Community Survival.
   */
  private function communitySurvival()
  {
    $playerCount = Players::count();
    return Community::getJoy() >= $this->communitMarkerThreshold[$playerCount];
  }

  /**
   * If neither of these conditions has been met and the fifth week has been
   * completed, the game ends with Community Atrophy.
   */
  private function communityAtrophy()
  {
    return Globals::getCurrentWeek() === 5;
  }
}
