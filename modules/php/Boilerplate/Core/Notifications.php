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

  public static function addCardFromGossipPile($player, $card)
  {
    self::notify($player, 'addCardFromGossipPilePrivate', clienttranslate('${player_name} takes ${tkn_boldText_cardValue} of ${tkn_suit} from the gossip pile'), [
      'player' => $player,
      'card' => $card,
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);


    self::notifyAll('addCardFromGossipPile', clienttranslate('${player_name} takes a card from the gossip pile'), [
      'player' => $player,
      'preserve' => ['playerId'],
    ]);
  }

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

  public static function dealItemToShop($item, $site)
  {
    self::notifyAll('dealItemToShop', clienttranslate('${tkn_boldText_itemName} is dealt to ${tkn_boldText_site}'), [
      'item' => $item,
      'tkn_boldText_itemName' => $item->getName(),
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_itemName', 'tkn_boldText_site'],
    ]);
  }

  public static function discardItem($player, $item)
  {
    $text = clienttranslate('${tkn_boldText_itemName} is discarded');
    $args = [
      'item' => $item,
      'tkn_boldText_itemName' => $item->getName(),
      'i18n' => ['tkn_boldText_itemName'],
    ];
    if ($player !== null) {
      $text = clienttranslate('${player_name} discards ${tkn_boldText_itemName}');
      $args['player'] = $player;
    }

    self::notifyAll('discardItem', $text, $args);
  }

  public static function drawCards($player, $cards, $numberOfDrawTokenToReturn)
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
      'numberOfDrawTokenToReturn' => $numberOfDrawTokenToReturn,
      'tkn_boldText_number' => $number,
    ]);

    self::notifyAll('drawCards', $text, [
      'player' => $player,
      'number' => $number,
      'tkn_boldText_number' => $number,
      'numberOfDrawTokenToReturn' => $numberOfDrawTokenToReturn,
      'preserve' => ['playerId'],
    ]);
  }

  public static function gainDrawTokens($player, $number)
  {
    self::notifyAll('gainDrawTokens', clienttranslate('${player_name} gains ${tkn_boldText_number} ${tkn_drawTokens}'), [
      'player' => $player,
      'tkn_boldText_number' => $number,
      'number' => $number,
      'tkn_drawTokens' => DRAW_TOKEN,
    ]);
  }

  public static function endOfWeekAddCardToGossipPile()
  {
    self::notifyAll('endOfWeekAddCardToGossipPile', clienttranslate('A card is added to the gossip pile'), []);
  }

  public static function endOfWeekDiscardToSafePile($cards)
  {
    $number = count($cards);

    self::notifyAll('endOfWeekDiscardToSafePile', clienttranslate('${tkn_boldText_number} cards from the gossip pile are added to the safe pile'), [
      'cards' => $cards,
      'number' => $number,
      'tkn_boldText_number' => $number,
    ]);
  }

  public static function endOfWeekMollyHouseRaided($site, $adjacentSites)
  {
    self::notifyAll('endOfWeekMollyHouseRaided', clienttranslate('${tkn_boldText_mollyHouse} is raided!'), [
      'mollyHouse' => $site,
      'adjacentSites' => $adjacentSites,
      'tkn_boldText_mollyHouse' => $site->getName(),
      'i18n' => ['tkn_boldText_mollyHouse'],
    ]);
  }

  public static function endOfWeekCreateViceDeck($cards)
  {

    self::notifyAll('endOfWeekCreateViceDeck', clienttranslate('A new vice deck is created and shuffled'), [
      'cards' => array_map(function ($card) {
        return $card->jsonSerialize();
      }, $cards),
    ]);
  }

  public static function endOfWeekGenerateEvidence($site, $number)
  {

    self::notifyAll('endOfWeekGenerateEvidence', clienttranslate('Evidence generated against ${tkn_boldText_mollyHouse}: ${tkn_boldText_number} ${tkn_cube}'), [
      'site' => $site,
      'number' => $number,
      'tkn_boldText_number' => $number,
      'tkn_boldText_mollyHouse' => $site->getName(),
      'tkn_cube' => self::tknCube($site->getSuit()),
      'i18n' => ['tkn_boldText_number', 'tkn_boldText_mollyHouse'],
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

  public static function festivityRevealTopCardViceDeck($player, $card, $cardDrawnFromGossipPile)
  {
    $text = $cardDrawnFromGossipPile
      ? clienttranslate('The ${tkn_boldText_community} plays ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard} from the gossip pile')
      : clienttranslate('The ${tkn_boldText_community} plays ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}');

    self::notifyAll('festivityRevealTopCardViceDeck', $text, [
      'player' => $player,
      'card' => $card,
      'cardDrawnFromGossipPile' => $cardDrawnFromGossipPile,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_boldText_community' => clienttranslate('community'),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue', 'tkn_boldText_community'],
    ]);
  }

  // public static function festivityPhase($phase)
  // {
  //   self::notifyAll('festivityPhase', clienttranslate('Festivity - ${phase}'), [
  //     'phase' => $phase,
  //   ]);
  // }

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

  public static function gainIndictment($player, $indictment, $majorOrMinor)
  {
    $text = $majorOrMinor === MAJOR
      ? clienttranslate('${player_name} gains a major indictment')
      : clienttranslate('${player_name} gains a minor indictment');

    self::notify($player, 'gainIndictmentPrivate', $text, [
      'player' => $player,
      'indictment' => $indictment,
      'majorOrMinor' => $majorOrMinor,
    ]);

    self::notifyAll('gainIndictment', $text, [
      'majorOrMinor' => $majorOrMinor,
      'player' => $player,
      'preserve' => ['playerId'],
    ]);
  }

  public static function loseJoy($player, $amount, $total)
  {
    self::notifyAll('loseJoy', clienttranslate('${player_name} loses ${tkn_boldText_amount} joy'), [
      'player' => $player,
      'amount' => $amount,
      'total' => $total,
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

  public static function takeCandelabra($player)
  {
    self::notifyAll('takeCandelabra', clienttranslate('${player_name} takes the candelabra'), [
      'player' => $player,
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

  public static function placeEncounterToken($player, $site, $token)
  {
    $text = clienttranslate('${player_name} places ${tkn_encounterToken} on ${tkn_boldText_site}');

    $publicToken = $token->jsonSerialize();
    if ($token->isHidden()) {
      $publicToken['type'] = null;
    }

    self::notify($player, 'placeEncounterTokenPrivate', $text, [
      'player' => $player,
      'siteId' => $site->getId(),
      'token' => $token,
      'tkn_encounterToken' => implode(':', [$player->getColor(), $token->getType()]),
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_site'],
    ]);

    self::notifyAll('placeEncounterToken', $text, [
      'player' => $player,
      'siteId' => $site->getId(),
      'token' => $publicToken,
      'tkn_encounterToken' => implode(':', [$player->getColor(), $publicToken['type']]),
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_site'],
      'preserve' => ['playerId'],
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

  public static function phase($text, $args = [])
  {
    self::notifyAll('phase', $text, $args);
  }

  public static function playDress($player, $item)
  {
    self::notifyAll('playDress', clienttranslate('${player_name} plays their ${tkn_boldText_dress}'), [
      'player' => $player,
      'item' => $item,
      'tkn_boldText_dress' => $item->getName(),
      'i18n' => ['tkn_boldText_dress'],
    ]);
  }

  public static function refillMarket($player, $movedCards, $addedCards)
  {
    $args = [
      'movedCards' => $movedCards,
      'addedCards' => $addedCards,
    ];

    if ($player !== null) {
      $args['player'] = $player;
    }

    $text = $player === null ? clienttranslate('Vacant market spaces are refilled') : clienttranslate('${player_name} refills the market');

    self::notifyAll('refillMarket', $text, $args);
  }

  public static function revealEncounterToken($player, $site, $token)
  {
    self::notifyAll('revealEncounterToken', clienttranslate('${player_name} reveals ${tkn_encounterToken} at ${tkn_boldText_site}'), [
      'player' => $player,
      'siteId' => $site->getId(),
      'token' => $token,
      'tkn_encounterToken' => implode(':', [$token->getColor(), $token->getType()]),
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_site'],
    ]);
  }

  public static function revealThreat($player, $card)
  {
    self::notifyAll('revealThreat', clienttranslate('${player_name} reveals ${tkn_boldText_cardValue} of ${tkn_suit}'), [
      'player' => $player,
      'card' => $card,
      'tkn_viceCard' => self::tknViceCard($card),
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'i18n' => ['tkn_boldText_cardValue'],
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

  public static function scoreBonusJoy($player, $amount, $card, $totalScore)
  {
    self::notifyAll('scoreBonusJoy', clienttranslate('${player_name} scores ${tkn_boldText_amount} bonus joy with ${tkn_boldText_cardValue} of ${tkn_suit}${tkn_viceCard}'), [
      'player' => $player,
      'amount' => $amount,
      'total' => $totalScore,
      'tkn_boldText_amount' => $amount,
      'tkn_boldText_cardValue' => self::viceCardValueText($card->getDisplayValue()),
      'tkn_suit' => $card->getSuit(),
      'tkn_viceCard' => self::tknViceCard($card),
      'i18n' => ['tkn_boldText_cardValue'],
    ]);
  }


  public static function scoreJoy($player, $amount, $total)
  {
    self::notifyAll('scoreJoy', clienttranslate('${player_name} scores ${tkn_boldText_amount} joy!'), [
      'player' => $player,
      'amount' => $amount,
      'total' => $total,
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

  public static function takeItem($player, $item, $site)
  {
    self::notifyAll('takeItem', clienttranslate('${player_name} takes ${tkn_boldText_itemName} from ${tkn_boldText_site}'), [
      'player' => $player,
      'item' => $item,
      'tkn_boldText_itemName' => $item->getName(),
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_itemName', 'tkn_boldText_site'],
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

  public static function useItem($player, $item)
  {
    self::message(clienttranslate('${player_name} uses ${tkn_boldText_itemName}'), [
      'player' => $player,
      'tkn_boldText_itemName' => $item->getName(),
      'i18n' => ['tkn_boldText_itemName'],
    ]);
  }
}
