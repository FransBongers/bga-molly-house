<?php

namespace Bga\Games\MollyHouse\Boilerplate\Core;

use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;

class Notifications
{
  // .########...#######..####.##.......########.########.
  // .##.....##.##.....##..##..##.......##.......##.....##
  // .##.....##.##.....##..##..##.......##.......##.....##
  // .########..##.....##..##..##.......######...########.
  // .##.....##.##.....##..##..##.......##.......##...##..
  // .##.....##.##.....##..##..##.......##.......##....##.
  // .########...#######..####.########.########.##.....##

  // .########..##..........###....########.########
  // .##.....##.##.........##.##......##....##......
  // .##.....##.##........##...##.....##....##......
  // .########..##.......##.....##....##....######..
  // .##........##.......#########....##....##......
  // .##........##.......##.....##....##....##......
  // .##........########.##.....##....##....########
  protected static function notifyAll($name, $msg, $data)
  {
    self::updateArgs($data);
    Game::get()->notifyAllPlayers($name, $msg, $data);
  }

  protected static function notify($player, $name, $msg, $data)
  {
    $playerId = is_int($player) ? $player : $player->getId();
    self::updateArgs($data);
    Game::get()->notifyPlayer($playerId, $name, $msg, $data);
  }

  public static function message($txt, $args = [])
  {
    self::notifyAll('message', $txt, $args);
  }

  public static function messageTo($player, $txt, $args = [])
  {
    $playerId = is_int($player) ? $player : $player->getId();
    self::notify($playerId, 'message', $txt, $args);
  }

  // TODO: check how to handle this in game log
  public static function newUndoableStep($player, $stepId)
  {
    self::notify($player, 'newUndoableStep', clienttranslate('Undo to here'), [
      'stepId' => $stepId,
      'preserve' => ['stepId'],
    ]);
  }

  public static function clearTurn($player, $notifIds)
  {
    self::notifyAll('clearTurn', clienttranslate('${player_name} restarts their turn'), [
      'player' => $player,
      'notifIds' => $notifIds,
    ]);
  }

  // public static function refreshHand($player, $hand)
  // {
  //   // foreach ($hand as &$card) {
  //   //   $card = self::filterCardDatas($card);
  //   // }
  //   self::notify($player, 'refreshHand', '', [
  //     'player' => $player,
  //     'hand' => $hand,
  //   ]);
  // }

  public static function refreshUI($data)
  {
    // Keep only the thing that matters
    $refreshedData = [
      // Add data here that needs to be refreshed

    ];
  }



  public static function log($message, $data)
  {
    self::notifyAll('log', '', [
      'message' => $message,
      'data' => $data,
    ]);
  }

  // .##.....##.########..########.....###....########.########
  // .##.....##.##.....##.##.....##...##.##......##....##......
  // .##.....##.##.....##.##.....##..##...##.....##....##......
  // .##.....##.########..##.....##.##.....##....##....######..
  // .##.....##.##........##.....##.#########....##....##......
  // .##.....##.##........##.....##.##.....##....##....##......
  // ..#######..##........########..##.....##....##....########

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  /*
   * Automatically adds some standard field about player and/or card
   */
  protected static function updateArgs(&$args)
  {
    if (isset($args['player'])) {
      $args['player_name'] = $args['player']->getName();
      $args['playerId'] = $args['player']->getId();
      unset($args['player']);
    }
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public static function tknCube($suit)
  {
    return implode(':', [SUIT_COLOR_MAP[$suit], 'cube']);
  }

  protected static function tknDie($die)
  {
    return implode(':', [$die + 1, DIE_FACES[$die]]);
  }

  protected static function tknPawn($pawn)
  {
    return implode(':', [$pawn->getColor(), PAWN]);
  }

  protected static function tknViceCard($card)
  {
    return $card->getId();
  }

  public static function viceCardValueText($value)
  {
    switch ($value) {
      case 'Q':
        return clienttranslate('Queen');
      case 'J':
        return clienttranslate('Jack');
      case 'R':
        return clienttranslate('Rogue');
      case 'C':
        return clienttranslate('Constable');
      default:
        return $value;
    }
  }

  private static function cardsLog($cards)
  {
    $cardsLog = [];
    $cardsLogArgs = [];

    //  ${tkn_boldText_cardValue} of ${tkn_suit}

    foreach ($cards as $index => $card) {
      $log = '';
      // Value
      $key = 'tkn_boldText_cardValue' . $index;
      $log = $log . '${' . $key . '}';
      $cardsLogArgs[$key] = self::viceCardValueText($card->getDisplayValue());

      // Suit
      $keySuit = 'tkn_suit_' . $index;
      $log = $log . '${' . $keySuit . '}';
      $cardsLogArgs[$keySuit] = $card->getSuit();
      $cardsLog[] = $log;
    }

    return [
      'log' => implode(' ', $cardsLog),
      'args' => $cardsLogArgs,
    ];
  }

  // ..######......###....##.....##.########
  // .##....##....##.##...###...###.##......
  // .##.........##...##..####.####.##......
  // .##...####.##.....##.##.###.##.######..
  // .##....##..#########.##.....##.##......
  // .##....##..##.....##.##.....##.##......
  // ..######...##.....##.##.....##.########

  // .##....##..#######..########.####.########..######.
  // .###...##.##.....##....##.....##..##.......##....##
  // .####..##.##.....##....##.....##..##.......##......
  // .##.##.##.##.....##....##.....##..######....######.
  // .##..####.##.....##....##.....##..##.............##
  // .##...###.##.....##....##.....##..##.......##....##
  // .##....##..#######.....##....####.##........######.

  public static function addCardToHand($player, $card)
  {
    self::notifyAll('addCardToHand', clienttranslate('${player_name} adds ${tkn_boldText_cardValue} of ${tkn_suit} to their hand${tkn_viceCard}'), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function addCardToReputation($player, $card)
  {
    self::notifyAll('addCardToReputation', clienttranslate('${player_name} adds ${tkn_boldText_cardValue} of ${tkn_suit} to their reputation${tkn_viceCard}'), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function foilThreat($playerOrCommunity, $card)
  {
    if ($playerOrCommunity === COMMUNITY) {
      self::notifyAll('addCardToSafePile', clienttranslate('The ${tkn_boldText_community} foils a threat and adds it to the safe pile: ${tkn_boldText_cardValue} of ${tkn_suit} ${tkn_viceCard}'), [
        'tkn_boldText_community' => clienttranslate('community'),
        'card' => $card,
        'tkn_viceCard' => self::tknViceCard($card),
        'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
        'tkn_suit' => $card->getSuit(),
        'i18n' => ['tkn_boldText_cardValue'],
      ]);
      return;
    }

    self::notifyAll('addCardToSafePile', clienttranslate('${player_name} foils a threat and adds it to the safe pile: ${tkn_boldText_cardValue} of ${tkn_suit} ${tkn_viceCard}'), [
      'player' => $playerOrCommunity,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function addCardToSafePile($playerOrCommunity, $card)
  {
    if ($playerOrCommunity === COMMUNITY) {
      self::notifyAll('addCardToSafePile', clienttranslate('The ${tkn_boldText_community} adds ${tkn_boldText_cardValue} of ${tkn_suit} to the safe pile ${tkn_viceCard}'), [
        'tkn_boldText_community' => clienttranslate('community'),
        'card' => $card,
        'tkn_viceCard' => self::tknViceCard($card),
        'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
        'tkn_suit' => $card->getSuit(),
        'i18n' => ['tkn_boldText_cardValue'],
      ]);
      return;
    }

    self::notifyAll('addCardToSafePile', clienttranslate('${player_name} adds ${tkn_boldText_cardValue} of ${tkn_suit} to the safe pile ${tkn_viceCard}'), [
      'player' => $playerOrCommunity,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function addCardToGossipPile($player, $card)
  {
    self::notifyAll('addCardToGossipPile', clienttranslate('${player_name} adds ${tkn_boldText_cardValue} of ${tkn_suit} to the gossip pile ${tkn_viceCard}'), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function addExcessCardsToGossip($player, $cards)
  {

    $number = count($cards);

    $text = $number === 1
      ? clienttranslate('${player_name} adds ${tkn_boldText_number} card from their hand to the gossip pile')
      : clienttranslate('${player_name} adds ${tkn_boldText_number} cards from their hand to the gossip pile');

    self::notify($player, 'addExcessCardsToGossipPrivate', $text, [
      'player' => $player,
      'tkn_boldText_number' => $number,
      'cards' => $cards,
    ]);

    self::notifyAll('addExcessCardsToGossip', $text, [
      'player' => $player,
      'tkn_boldText_number' => $number,
      'number' => $number,
      'preserve' => ['playerId'],
    ]);
  }

  public static function drawCards($player, $cards)
  {
    // TODO: cardsLog ?
    $text = count($cards) === 1
      ? clienttranslate('${player_name} draws ${tkn_boldText_number} card')
      : clienttranslate('${player_name} draws ${tkn_boldText_number} cards');

    $number = count($cards);

    self::notify($player, 'drawCardsPrivate', $text, [
      'player' => $player,
      'cards' => $cards,
      'number' => $number,
      'tkn_boldText_number' => $number,
    ]);

    self::notifyAll('drawCards', $text, [
      'player' => $player,
      'number' => $number,
      'tkn_boldText_number' => $number,
      'preserve' => ['playerId'],
    ]);
  }

  public static function festivityEnd()
  {
    self::notifyAll('festivityEnd', '', []);
  }

  public static function festivityPlayCard($player, $card)
  {
    $text = $card->isRogue()
      ? clienttranslate('${player_name} plays ${tkn_boldText_cardValue} of ${tkn_suit} as ${tkn_boldText_valueForRogue}${tkn_viceCard}')
      : clienttranslate('${player_name} plays ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}');

    self::notifyAll('festivityPlayCard', $text, [
      'player' => $player,
      'card' => $card->jsonSerialize(),
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_boldText_valueForRogue' => $card->getFestivityValue(),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function festivityRevealTopCardViceDeck($player, $card)
  {
    self::notifyAll('festivityRevealTopCardViceDeck', clienttranslate('The ${tkn_boldText_community} plays ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}'), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_boldText_community' => clienttranslate('community'),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue', 'tkn_boldText_community'],
    ]);
  }

  public static function festivityPhase($phase)
  {
    self::notifyAll('festivityPhase', clienttranslate('Festivity - ${phase}'), [
      'phase' => $phase,
    ]);
  }

  public static function festivitySetRogueValue($player, $card, $value, $isCommunityCard = false)
  {
    $text = $isCommunityCard
      ? clienttranslate('The ${tkn_boldText_community} sets the value of ${tkn_boldText_cardValue} of ${tkn_suit} to ${tkn_boldText_value}${tkn_viceCard}')
      : clienttranslate('${player_name} sets the value of ${tkn_boldText_cardValue} of ${tkn_suit} to ${tkn_boldText_value}${tkn_viceCard}');

    $args = [
      'player' => $player,
      'card' => $card,
      'value' => $value,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'tkn_boldText_value' => self::viceCardValueText($value),
      'i18n' => ['tkn_boldText_cardValue', 'tkn_boldText_value'],
    ];

    if ($isCommunityCard) {
      $args['tkn_boldText_community'] = clienttranslate('Community');
    }

    self::notifyAll('festivitySetRogueValue', $text, $args);
  }

  public static function festivityWinningSet($cards)
  {
    self::notifyAll('festivityWinningSet', clienttranslate('The winning set is ${cardsLog}'), [
      'cards' => $cards,
      'cardsLog' => self::cardsLog($cards),
    ]);
  }

  public static function gainCubes($player, $suit, $numberOfCubes, $take = false)
  {
    $text = $take
      ? clienttranslate('${player_name} chooses to take ${tkn_boldText_numberOfCubes} ${tkn_cube}')
      : clienttranslate('${player_name} gains ${tkn_boldText_numberOfCubes} ${tkn_cube}');

    self::notifyAll('gainCubes', $text, [
      'player' => $player,
      'suit' => $suit,
      'numberOfCubes' => $numberOfCubes,
      'tkn_boldText_numberOfCubes' => $numberOfCubes,
      'tkn_cube' => self::tknCube($suit),
    ]);
  }

  public static function loseJoy($player, $amount)
  {
    self::notifyAll('loseJoy', clienttranslate('${player_name} loses ${tkn_boldText_amount} joy'), [
      'player' => $player,
      'amount' => $amount,
      'tkn_boldText_amount' => $amount,
      'i18n' => ['tkn_boldText_amount'],
    ]);
  }

  public static function loseJoyCommunity($joyDecrease, $joyTotal)
  {
    self::notifyAll('loseJoyCommunity', clienttranslate('The ${tkn_boldText_community} loses ${tkn_boldText_amount} joy'), [
      'joyDecrease' => $joyDecrease,
      'joyTotal' => $joyTotal,
      'tkn_boldText_community' => clienttranslate('community'),
      'tkn_boldText_amount' => $joyDecrease,
      'i18n' => ['tkn_boldText_amount', 'tkn_boldText_community'],
    ]);
  }

  public static function movePawn($player, $pawn, $from)
  {
    self::notifyAll('movePawn', clienttranslate('${player_name} moves ${tkn_pawn} to ${tkn_boldText_location}'), [
      'player' => $player,
      'pawn' => $pawn,
      'from' => $from,
      'tkn_pawn' => self::tknPawn($player),
      'tkn_boldText_location' => Sites::get($pawn->getLocation())->getName(),
      'i18n' => ['tkn_boldText_location'],
    ]);
  }

  public static function placePawn($player, $pawn)
  {
    self::notifyAll('placePawn', clienttranslate('${player_name} places ${tkn_pawn} on ${tkn_boldText_location}'), [
      'player' => $player,
      'pawn' => $pawn,
      'tkn_pawn' => self::tknPawn($player),
      'tkn_boldText_location' => Sites::get($pawn->getLocation())->getName(),
      'i18n' => ['tkn_boldText_location'],
    ]);
  }

  public static function refillMarket($player, $movedCards, $addedCards)
  {
    self::notifyAll('refillMarket', clienttranslate('${player_name} refills the market'), [
      'player' => $player,
      'movedCards' => $movedCards,
      'addedCards' => $addedCards,
    ]);
  }

  public static function rollDice($player, $diceResults)
  {
    self::notifyAll('rollDice', clienttranslate('${player_name} rolls ${tkn_die_0}${tkn_die_1}'), [
      'player' => $player,
      'diceResults' => $diceResults,
      'tkn_die_0' => self::tknDie($diceResults[0]),
      'tkn_die_1' => self::tknDie($diceResults[1])
    ]);
  }

  public static function scoreBonusJoy($player, $amount, $card)
  {
    self::notifyAll('scoreBonusJoy', clienttranslate('${player_name} scores ${tkn_boldText_amount} bonus joy with ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}'), [
      'player' => $player,
      'amount' => $amount,
      'tkn_boldText_amount' => $amount,
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'tkn_viceCard' => self::tknViceCard($card),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }


  public static function scoreJoy($player, $amount)
  {
    self::notifyAll('scoreJoy', clienttranslate('${player_name} scores ${tkn_boldText_amount} joy!'), [
      'player' => $player,
      'amount' => $amount,
      'tkn_boldText_amount' => $amount,
      'i18n' => ['tkn_boldText_amount'],
    ]);
  }

  public static function scoreJoyCommunity($joyIncrease, $joyTotal)
  {
    self::notifyAll('scoreJoyCommunity', clienttranslate('The ${tkn_boldText_community} scores ${tkn_boldText_amount} joy!'), [
      'joyIncrease' => $joyIncrease,
      'joyTotal' => $joyTotal,
      'tkn_boldText_community' => clienttranslate('community'),
      'tkn_boldText_amount' => $joyIncrease,
      'i18n' => ['tkn_boldText_amount', 'tkn_boldText_community'],
    ]);
  }

  public static function setupChooseCard($player, $selectedCard)
  {
    self::notify($player, 'setupChooseCardPrivate', clienttranslate('${player_name} selects ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}'), [
      'player' => $player,
      'card' => $selectedCard,
      'tkn_viceCard' => self::tknViceCard($selectedCard),
      'tkn_boldText_cardValue' => self::viceCardValueText($selectedCard->getDisplayValue()),
      'tkn_suit' => $selectedCard->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);

    self::notifyAll('setupChooseCard', clienttranslate('${player_name} selects a card to put in their reputation'), [
      'player' => $player,
      'card' => [
        'id' => $selectedCard->getId(),
        'hidden' => $selectedCard->isHidden(),
      ],
      'preserve' => ['playerId'],
    ]);
  }

  public static function setupRevealCard($player, $card)
  {
    self::notifyAll('setupRevealCard', clienttranslate('${player_name} reveals ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard} '), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'you' => '${you}',
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function startOfTurn($player)
  {
    self::notifyAll('startOfTurn', clienttranslate('${player_name} starts their turn'), [
      'player' => $player,
    ]);
  }

  public static function throwFestivity($player, $site)
  {
    self::notifyAll('throwFestivity', clienttranslate('${player_name} throws a festivity at ${tkn_boldText_site}'), [
      'player' => $player,
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_site'],
    ]);
  }
}
