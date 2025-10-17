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
use Bga\Games\MollyHouse\Models\Site;

class EndOfWeekSocietyInvestigates extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_END_OF_WEEK_SOCIETY_INVESTIGATES;
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

  public function stEndOfWeekSocietyInvestigates()
  {
    Notifications::phase(clienttranslate('The Society Investigates'));

    ViceCards::shuffle(GOSSIP_PILE);

    $numberToDiscardToSafePile = floor(ViceCards::countInLocation(GOSSIP_PILE) / 3);

    $cardsAddedToSafePile = ViceCards::pickForLocation($numberToDiscardToSafePile, GOSSIP_PILE, SAFE_PILE);

    Notifications::endOfWeekDiscardToSafePile(
      $cardsAddedToSafePile,
      $numberToDiscardToSafePile
    );

    $cardsInGossip = ViceCards::getInLocationOrdered(GOSSIP_PILE);

    $evidence = [
      CUPS => [
        'threats' => [],
        'cards' => [],
      ],
      FANS => [
        'threats' => [],
        'cards' => [],
      ],
      HEARTS => [
        'threats' => [],
        'cards' => [],
      ],
      PENTACLES => [
        'threats' => [],
        'cards' => [],
      ],
    ];

    foreach ($cardsInGossip as $card) {
      if ($card->isThreat()) {
        $card->setLocation(Locations::evidence('threats', $card->getSuit()));
        $evidence[$card->getSuit()]['threats'][] = $card;
      } else {
        $card->setLocation(Locations::evidence('cards', $card->getSuit()));
        $evidence[$card->getSuit()]['cards'][] = $card;
      }
    }

    Notifications::endOfWeekRevealEvidence($evidence);

    $mollyHouses = Sites::getMany(MOLLY_HOUSES);



    foreach (MOLLY_HOUSES as $id) {
      $mollyHouse = $mollyHouses[$id];
      $threatCount = count($evidence[$mollyHouse->getSuit()]['threats']);
      $cardCount = count($evidence[$mollyHouse->getSuit()]['cards']);

      if ($threatCount + $cardCount > 0) {
        Notifications::endOfWeekRevealEvidenceForSuit(
          $mollyHouse->getSuit(),
          $evidence[$mollyHouse->getSuit()]['threats'],
          $evidence[$mollyHouse->getSuit()]['cards'],
        );
      }

      if ($threatCount === 0 || $cardCount === 0) {
        continue;
      }
      $numberOfCubes = $threatCount * $cardCount;

      $mollyHouse->generateEvidence($numberOfCubes);
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
