<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;

class FestivityDetermineWinningSet extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_DETERMINE_WINNING_SET;
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

  public function stFestivityDetermineWinningSet()
  {
    $results = $this->getBestSetOfCards(
      Festivity::getPlayedCards()
    );
    // $sets = $result['sets'];
    // $ranking = $result['ranking'];

    // If multiple sets of same rank can be made, runner decides
    $multipeSets = count($results) > 1 || $this->getCountOfValues($results[0]['cards']) > 4;
    if ($multipeSets) {
      $action = [
        'action' => FESTIVITY_SELECT_WINNING_SET,
        'playerId' => Festivity::get()['runner'],
        'ranking' => $results[0]['ranking'] === SURPRISE_BALL_WITH_DRESS ? SURPRISE_BALL : $results[0]['ranking'],
        'sets' => $this->returnSetsWithIds($results)
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
      $this->resolveAction(['automatic' => true]);
      return;
    }

    $winningSet = [];
    foreach ($results[0]['cards'] as $value => $cards) {
      foreach ($cards as $card) {
        $winningSet[] = $card;
      }
    }

    usort($winningSet, function ($a, $b) {
      return $a->getFestivityValue() <=> $b->getFestivityValue();
    });

    Notifications::festivityWinningSet($winningSet);
    Festivity::setWinningSet(
      [
        'ranking' => $results[0]['ranking'],
        'cardIds' => Utils::returnIds($winningSet),
      ]
    );

    $this->resolveAction(['automatic' => true]);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private function returnSetsWithIds($sets)
  {
    return array_map(function ($set) {
      $cards = $set['cards'];
      $ranking = $set['ranking'];
      $cardIds = [];
      foreach ($cards as $value => $cards) {
        $cardIds[$value] = Utils::returnIds($cards);
      }
      return [
        'ranking' => $ranking,
        'cardIds' => $cardIds
      ];
    }, $sets);
  }

  /**
   * In order highest to lowest ranking: check if it exists amongst the cards played in the festivity
   * Suprise Ball: sort by suit, then rank, check if 4 consecutive exists
   * Christening: Check Queens and number of cards of each value
   * Dance: Check Jack and desire cards in sequential order
   *
   * Should return
   * - array of 'sets' 
   * - Each set is an object with cardValue as index and cardIds as value 
   */
  public function getBestSetOfCards($cards)
  {
    foreach (FESTIVITIES as $rank) {
      $sets = $this->getSetsForRank($rank, $cards);
      if (count($sets) > 0) {
        return $sets;
      }
    }
  }

  private function getSetsForRank($rank, $cards)
  {
    switch ($rank) {
      case SURPRISE_BALL:
        return $this->getSupriseBallSets($cards);
      case CHRISTENING:
        return $this->getChristeningSets($cards);
      case DANCE:
        return $this->getDanceSets($cards);
      case QUIET_GATHERING:
        return $this->getQuietGatheringSets($cards);
        break;
      default:
        return [];
    }
  }

  // Surprise Ball: Four desire cards of the same suit in sequential order.
  public function getSupriseBallSets($cards)
  {
    $playedDresses = array_map(function ($item) {
      return $item->getSuit();
    }, Items::getInLocation(PLAYED_DRESSES)->toArray());
    // TODO: return whether is is Suprise Ball with Dresses or not
    // TODO: dresses
    $cardsSortedBySuit = [
      CUPS => [],
      PENTACLES => [],
      FANS => [],
      HEARTS => [],
      DRESSES => [],
    ];

    // Don't check Queens, Jacks or Constables
    foreach ($cards as $card) {
      $suit = $card->getSuit();
      if ($card->isDesire() || $card->isRogue()) {
        $cardsSortedBySuit[$suit][] = $card;
      }
      if (in_array($suit, $playedDresses)) {
        $cardsSortedBySuit[DRESSES][] = $card;
      }
    }

    $sets = [];
    foreach ($cardsSortedBySuit as $suit => $suitCards) {
      if ($suit === DRESSES && count($suitCards) >= 4) {
        $set = $this->getHighestValueDresses($suitCards);
        $sets[] = $this->createSetData(SURPRISE_BALL_WITH_DRESS, $set);
        continue;
      }

      if (count($suitCards) < 4) {
        continue;
      }
      usort($suitCards, function ($a, $b) {
        return $a->getFestivityValue() <=> $b->getFestivityValue();
      });

      $set = $this->getSetOfSizeInSequentialOrder($suitCards, 4);

      if (count($set) === 4) {
        // Valid set
        $sets[] = $this->createSetData(SURPRISE_BALL, $set);
      }
    }

    $highestIndex = -1;
    if (count($sets) <= 1) {
      return $sets;
    }
    foreach ($sets as $i => $set) {
      $highestIndexSuit = max(array_keys($set['cards']));
      if ($highestIndexSuit > $highestIndex) {
        $highestIndex = $highestIndexSuit;
      }
    }

    $sets = Utils::filter($sets, function ($set) use ($highestIndex) {
      return max(array_keys($set['cards'])) === $highestIndex;
    });

    return $sets;
  }

  // Christening: Queen and 3 desire cards of the same value.
  private function getChristeningSets($cards)
  {
    $queens = [];
    $desireCards = [];
    // Sort cards
    foreach ($cards as $card) {
      if ($card->isQueen()) {
        $queens[] = $card;
      } else if ($card->isDesire() || $card->isRogue()) {
        $value = $card->getFestivityValue();
        if (!isset($desireCards[$value])) {
          $desireCards[$value] = [];
        }
        // Add card to desire cards for this value
        $desireCards[$value][] = $card;
      }
    }

    if (count($queens) === 0) {
      return [];
    }

    $set = [];
    $set['queens'] = $queens;

    $cardValues = array_keys($desireCards);
    // sort in descending order
    usort($cardValues, function ($a, $b) {
      return $b <=> $a;
    });
    // from highest to lowest return the first set of 3 or more desire cards
    foreach ($cardValues as $value) {
      if (count($desireCards[$value]) >= 3) {
        $set[$value] = $desireCards[$value];
        return [$this->createSetData(CHRISTENING, $set)];
      }
    }

    return [];
  }

  private function getDanceSets($cards)
  {
    $jacks = [];
    $desireCards = [];
    // Sort cards
    foreach ($cards as $card) {
      if ($card->isJack()) {
        $jacks[] = $card;
      } else if ($card->isDesire() || $card->isRogue()) {
        $desireCards[] = $card;
      }
    }

    if (count($jacks) === 0) {
      return [];
    }

    $set = [];

    $set['jacks'] = $jacks;

    $desireCardsInSequentialOrder = $this->getSetOfSizeInSequentialOrder($desireCards, 3);
    if (count($desireCardsInSequentialOrder) > 0) {
      foreach ($desireCardsInSequentialOrder as $value => $cards) {
        $set[$value] = $cards;
      }
      return [
        $this->createSetData(DANCE, $set)
      ];
    }
    return [];
  }

  public function getHighestValueDresses($cards)
  {
    $desireCards = [];
    foreach ($cards as $card) {

      $value = $card->getFestivityValue();
      if (!isset($desireCards[$value])) {
        $desireCards[$value] = [];
      }

      $desireCards[$value][] = $card;
    }

    $cardValues = array_keys($desireCards);

    // sort in ascending order
    usort($cardValues, function ($a, $b) {
      return $b <=> $a;
    });

    $set = [];

    foreach ($cardValues as $value) {
      $set[$value] = $desireCards[$value];
      if ($this->getCountOfValues($set) >= 4) {
        return $set;
      }
    }

    return $set;
  }

  public function getCountOfValues($input)
  {
    $count = 0;
    foreach ($input as $key => $array) {
      $count += count($array);
    }
    return $count;
  }

  private function getQuietGatheringSets($cards)
  {
    $constables = [];
    $desireCards = [];
    // Sort cards
    foreach ($cards as $card) {
      if ($card->isConstable()) {
        $constables[] = $card; // Constables are always chosen
      } else if ($card->isDesire()) {
        $value = $card->getFestivityValue();
        if (!isset($desireCards[$value])) {
          $desireCards[$value] = [];
        }

        $desireCards[$value][] = $card;
      }
    }

    $set = [];

    if (count($constables) >= 0) {
      $set['constables'] = $constables;
    }

    // Four constables were played
    if ($this->getCountOfValues($set) >= 4) {
      return [
        $this->createSetData(QUIET_GATHERING, $set)
      ];
    }

    $cardValues = array_keys($desireCards);

    // sort in ascending order
    usort($cardValues, function ($a, $b) {
      return $a <=> $b;
    });

    foreach ($cardValues as $value) {
      $set[$value] = $desireCards[$value];
      if ($this->getCountOfValues($set) >= 4) {
        return [$this->createSetData(QUIET_GATHERING, $set)];
      }
    }
    // $this->getCountOfValues($set);
    return [$this->createSetData(QUIET_GATHERING, $set)];
  }

  /**
   * Cards: desire and roques
   * size: number of sequential cards to find
   */
  private function getSetOfSizeInSequentialOrder($cards, $size)
  {
    $storedSet = null;
    $set = [];
    usort($cards, function ($a, $b) {
      return $a->getFestivityValue() <=> $b->getFestivityValue();
    });

    foreach ($cards as $i => $card) {
      $value = $card->getFestivityValue();

      // Item already exists in set, just add it
      if (isset($set[$value])) {
        $set[$value][] = $card;
        continue;
      }
      if (count($set) === 0) {
        // First item in set
        $set[$value] = [$card];
        continue;
      }
      if (count($set) === $size && !isset($set[$value - 1])) {
        // We have a valid set of size, but the next card is not sequential
        // So start a new set to see if we can find a higher valued one, ie 1,2,3 first set 5,6,7 
        // is still possible
        $storedSet = $set;
        $set = [$value => [$card]];
        continue;
      }
      if (!isset($set[$value - 1])) {
        // Previous value not in set, reset to start again
        $set = [$value => [$card]];
        continue;
      }
      if (count($set) === $size) {
        // Remove the lowest value from the set, before we add the next one
        unset($set[$value - $size]);
      }
      // First value for next sequential card value
      $set[$value] = [$card];
    }

    if (count($set) === $size) {
      // Valid set and 'newest' set so hightest value
      return $set;
    } else if ($storedSet !== null) {
      return $storedSet;
    }

    return [];
  }

  private function createSetData($ranking, $cards)
  {
    return [
      'ranking' => $ranking,
      'cards' => $cards
    ];
  }
}
