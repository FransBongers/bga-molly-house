<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;


class FestivitySelectWinningSet extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_SELECT_WINNING_SET;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  // TODO: determine actual cards that need to be selected
  public function argsFestivitySelectWinningSet()
  {
    $info = $this->ctx->getInfo();

    $sets = $info['sets'];
    //  ViceCards::getInLocation(Locations::festivity(COMMUNITY))->toArray();
    // $players = Players::getAll();

    // foreach ($players as $player) {
    //   $cards = array_merge($cards, $player->getCardsPlayedInFestivity());
    // }

    $data = [
      // 'cardsInSet'
      'options' => $this->getOptions($sets),
      'numberToSelect' => 4,
      'ranking' => $info['ranking'],
      'sets' => $sets
    ];


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

  public function actPassFestivitySelectWinningSet()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actFestivitySelectWinningSet($args)
  {
    self::checkAction('actFestivitySelectWinningSet');

    $selectedCards = $args->selectedCards;
    $setIndex = $args->setIndex;

    $stateArgs = $this->argsFestivitySelectWinningSet();

    if (!isset($stateArgs['options'][$setIndex])) {
      throw new \feException("ERROR_015");
    }
    $set = $stateArgs['options'][$setIndex];

    $winningSet = $set['selected'];

    foreach ($set['choices'] as $choicesForValue) {
      $cards = $choicesForValue['cards'];
      $value = $choicesForValue['value'];
      $numberToSelect = $choicesForValue['numberToSelect'];

      if (!isset($selectedCards->$value)) {
        throw new \feException("ERROR_011");
      }
      if (count($selectedCards->$value) !== $numberToSelect) {
        throw new \feException("ERROR_012");
      }

      foreach ($selectedCards->$value as $cardId) {
        $card = Utils::array_find($cards, function ($c) use ($cardId) {
          return $c->getId() === $cardId;
        });

        if ($card === null) {
          throw new \feException("ERROR_013");
        }
        $winningSet[] = $card;
      }
    }

    usort($winningSet, function ($a, $b) {
      return $a->getFestivityValue() <=> $b->getFestivityValue();
    });

    Notifications::festivityWinningSet($winningSet, $stateArgs['ranking']);

    Festivity::setWinningSet(
      [
        'ranking' => $stateArgs['ranking'],
        'cardIds' => Utils::returnIds($winningSet),
      ]
    );


    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  // Here set is an object with values and arrays of cards
  private function getSurpriseBallOptions($cardSet)
  {
    $cards = ViceCards::getAll();

    $suit = $cards[$cardSet[array_keys($cardSet)[0]][0]]->getSuit();
    // TODO update this to work with multiple suits, or differentiate for suprise ball with dresses, probably better

    $setOptions = [
      'suit' => $suit,
      'selected' => [],
      'choices' => [],
      'ranking' => SURPRISE_BALL,
    ];
    foreach ($cardSet as $value => $cardIds) {
      // only one card for value, no choice
      if (count($cardIds) === 1) {
        $setOptions['selected'][] = $cards[$cardIds[0]];
      } else {
        $setOptions['choices'][] = [
          'value' => $value,
          'cards' => $this->returnCards($cards, $cardIds),
          'numberToSelect' => 1,
        ];
      }
    }
    return $setOptions;
  }

  private function getChristeningOptions($cardSet)
  {
    $cards = ViceCards::getAll();

    $setOptions = [
      'selected' => [],
      'choices' => [],
      'ranking' => CHRISTENING,
    ];

    foreach ($cardSet as $value => $cardIds) {

      if ($value === 'queens' && count($cardIds) > 1) {
        $setOptions['choices'][] = [
          'value' => 'Q',
          'cards' => $this->returnCards($cards, $cardIds),
          'numberToSelect' => 1,
        ];
      } else if ($value === 'queens' && count($cardIds) === 1) {
        $setOptions['selected'][] = $cards[$cardIds[0]];
      } else if (count($cardIds) > 3) {
        $setOptions['choices'][] = [
          'value' => $value,
          'cards' => $this->returnCards($cards, $cardIds),
          'numberToSelect' => 3,
        ];
      } else if (count($cardIds) === 3) {
        $setOptions['selected'] = array_merge($setOptions['selected'], $this->returnCards($cards, $cardIds));
      }
    }


    return $setOptions;
  }

  private function getDanceOptions($cardSet)
  {
    $cards = ViceCards::getAll();

    $setOptions = [
      'selected' => [],
      'choices' => [],
      'ranking' => DANCE,
    ];

    foreach ($cardSet as $value => $cardIds) {
      if (count($cardIds) > 1) {
        $setOptions['choices'][] = [
          'value' => $value,
          'cards' => $this->returnCards($cards, $cardIds),
          'numberToSelect' => 1,
        ];
      } else if (count($cardIds) === 1) {
        $setOptions['selected'][] = $cards[$cardIds[0]];
      }
    }
    return $setOptions;
  }

  private function getSurpriseBallWithDressOptions($cardSet)
  {
    $cards = ViceCards::getAll();

    $setOptions = [
      'selected' => [],
      'choices' => [],
      'ranking' => SURPRISE_BALL_WITH_DRESS,
    ];

    $cardValues = array_keys($cardSet);
    // sort in descending order
    usort($cardValues, function ($a, $b) {
      return $b <=> $a;
    });

    foreach ($cardValues as $value) {
      $cardIds = $cardSet[$value];
      if (count($setOptions['selected']) + count($cardIds) <= 4) {
        $setOptions['selected'] = array_merge($setOptions['selected'], $this->returnCards($cards, $cardIds));
        continue;
      }
      $setOptions['choices'][] = [
        'value' => $value,
        'cards' => $this->returnCards($cards, $cardIds),
        'numberToSelect' => 4 - count($setOptions['selected']),
      ];
    }
    return $setOptions;
  }

  private function getQuietGatheringOptions($cardSet)
  {
    $cards = ViceCards::getAll();

    $setOptions = [
      'selected' => [],
      'choices' => [],
      'ranking' => QUIET_GATHERING,
    ];

    if (isset($cardSet['constables'])) {
      $setOptions['selected'] = $this->returnCards($cards, $cardSet['constables']);
      unset($cardSet['constables']);
    }

    foreach ($cardSet as $value => $cardIds) {
      if (count($setOptions['selected']) + count($cardIds) <= 4) {
        $setOptions['selected'] = array_merge($setOptions['selected'], $this->returnCards($cards, $cardIds));
        continue;
      }
      $setOptions['choices'][] = [
        'value' => $value,
        'cards' => $this->returnCards($cards, $cardIds),
        'numberToSelect' => 4 - count($setOptions['selected']),
      ];
    }
    return $setOptions;
  }

  private function returnCards($cards, $cardIds)
  {
    return array_map(function ($cardId) use ($cards) {
      return $cards[$cardId];
    }, $cardIds);
  }

  private function getOptions($sets)
  {
    $options = [];
    foreach ($sets as $set) {
      $options[] = $this->getOptionsForSet($set['ranking'], $set['cardIds']);
    }
    return $options;
  }

  private function getOptionsForSet($ranking, $cards)
  {
    switch ($ranking) {
      case SURPRISE_BALL:
        return $this->getSurpriseBallOptions($cards);
      case SURPRISE_BALL_WITH_DRESS:
        return $this->getSurpriseBallWithDressOptions($cards);
      case CHRISTENING:
        return $this->getChristeningOptions($cards);
      case DANCE:
        return $this->getDanceOptions($cards);
      case QUIET_GATHERING:
        return $this->getQuietGatheringOptions($cards);
      default:
        throw new \feException("ERROR_014");
    }
  }
}
