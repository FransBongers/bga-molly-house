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
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getValue()),
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
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function addCardToSafePile($player, $card)
  {
    self::notifyAll('addCardToSafePile', clienttranslate('${player_name} adds ${tkn_boldText_cardValue} of ${tkn_suit} to the safe pile ${tkn_viceCard}'), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getValue()),
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
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }

  public static function addExcessCardsToGossip($player, $cards)
  {

    self::notify($player, 'addExcessCardsToGossipPrivate', clienttranslate('${player_name} adds ${tkn_boldText_number} cards from their hand to the gossip pile'), [
      'player' => $player,
      'tkn_boldText_number' => count($cards),
      'cards' => $cards,
    ]);

    self::notifyAll('addExcessCardsToGossip', clienttranslate('${player_name} adds ${tkn_boldText_number} cards from their hand to the gossip pile'), [
      'player' => $player,
      'tkn_boldText_number' => count($cards),
      'preserve' => ['playerId'],
    ]);
  }

  public static function drawCards($player, $cards)
  {
    // TODO: cardsLog ?
    $text = count($cards) === 1
      ? clienttranslate('${player_name} draws ${tkn_boldText_amount} card')
      : clienttranslate('${player_name} draws ${tkn_boldText_amount} cards');

    $amount = count($cards);

    self::notify($player, 'drawCardsPrivate', $text, [
      'player' => $player,
      'cards' => $cards,
      'amount' => $amount,
      'tkn_boldText_amount' => $amount,
    ]);

    self::notifyAll('drawCards', $text, [
      'player' => $player,
      'amount' => $amount,
      'tkn_boldText_amount' => $amount,
      'preserve' => ['playerId'],
    ]);
  }

  public static function gainCubes($player, $suit, $numberOfCubes)
  {
    self::notifyAll('gainCubes', clienttranslate('${player_name} gains ${tkn_boldText_numberOfCubes} cube(s) of ${tkn_suit}'), [
      'player' => $player,
      'suit' => $suit,
      'numberOfCubes' => $numberOfCubes,
      'tkn_boldText_numberOfCubes' => $numberOfCubes,
      'tkn_suit' => $suit,
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

  public static function refillMarket($player, $updatedCards)
  {
    self::notifyAll('refillMarket', clienttranslate('${player_name} refills the market'), [
      'player' => $player,
      'cards' => $updatedCards,
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
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getValue()),
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

  public static function setupChooseCard($player, $selectedCard)
  {
    self::notify($player, 'setupChooseCardPrivate', clienttranslate('${player_name} selects ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}'), [
      'player' => $player,
      'card' => $selectedCard,
      'tkn_viceCard' => self::tknViceCard($selectedCard),
      'tkn_boldText_cardValue' => self::viceCardValueText($selectedCard->getValue()),
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
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getValue()),
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
}
