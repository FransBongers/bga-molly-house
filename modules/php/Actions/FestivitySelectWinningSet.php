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
      'options' => $this->getOptions($info['ranking'], $sets),
      'numberToSelect' => 4,
      'ranking' => $info['ranking'],
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
      return $a->getValueForFestivity() <=> $b->getValueForFestivity();
    });

    Notifications::festivityWinningSet($winningSet);

    Festivity::setWinningSet(
      [
        'ranking' => $stateArgs['ranking'],
        'cardsIds' => Utils::returnIds($winningSet),
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

  private function getSurpriseBallOptions($sets)
  {
    $cards = ViceCards::getAll();

    $options = [];
    foreach ($sets as $set) {
      $suit = $cards[$set[array_keys($set)[0]]]->getSuit();
      $setOptions = [
        'suit' => $suit,
        'selected' => [],
        'choices' => [],
      ];
      foreach ($set as $value => $cardIds) {
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
      $options[] = $setOptions;
    }

    return $options;
  }

  private function getChristeningOptions($sets)
  {
    $cards = ViceCards::getAll();

    $options = [];

    $setOptions = [
      'selected' => [],
      'choices' => [],
    ];

    foreach ($sets[0] as $value => $cardIds) {

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
    $options[] = $setOptions;

    return $options;
  }

  private function getDanceOptions($sets)
  {
    $cards = ViceCards::getAll();

    $options = [];

    $setOptions = [
      'selected' => [],
      'choices' => [],
    ];

    foreach ($sets[0] as $value => $cardIds) {
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
    $options[] = $setOptions;

    return $options;
  }

  private function getQuietGatheringOptions($sets)
  {
    $cards = ViceCards::getAll();

    $options = [];

    $setOptions = [
      'selected' => [],
      'choices' => [],
    ];

    $set = $sets[0];

    if (isset($set['constables'])) {
      $setOptions['selected'] = $this->returnCards($cards, $set['constables']);
      unset($set['constables']);
    }

    foreach ($set as $value => $cardIds) {
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
    $options[] = $setOptions;

    return $options;
  }

  private function returnCards($cards, $cardIds)
  {
    return array_map(function ($cardId) use ($cards) {
      return $cards[$cardId];
    }, $cardIds);
  }

  private function getOptions($ranking, $sets)
  {
    switch ($ranking) {
      case SURPRISE_BALL:
        return $this->getSurpriseBallOptions($sets);
      case CHRISTENING:
        return $this->getChristeningOptions($sets);
      case DANCE:
        return $this->getDanceOptions($sets);
      case QUIET_GATHERING:
        return $this->getQuietGatheringOptions($sets);
      default:
        throw new \feException("ERROR_014");
    }
  }
}
