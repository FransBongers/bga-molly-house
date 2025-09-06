<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

class EndOfWeekCleanup extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_END_OF_WEEK_CLEANUP;
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

  public function stEndOfWeekCleanup()
  {

    $this->shuffleViceCardsAndCreateDeck();

    $this->refillMarketAndGossipPile();

    $this->drawCardsForDrawTokens();

    $this->refillShops();

    $this->advanceWeekMarker();

    Globals::setPlayersWhoGainedIndictment([]);
    Globals::setPlayersWhoPlayedDomino([]);

    $this->resolveAction(['automatic' => true]);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  /**
   * Shuffle all vice cards except those in players’ hands, players’ reputations,
   * and the market. This deck of cards becomes the vice deck.
   */
  private function shuffleViceCardsAndCreateDeck()
  {
    $viceCards = ViceCards::getAll();

    $cardsInDeck = [];
    foreach ($viceCards as $card) {
      if ($card->isInHand() || $card->isInReputation() || $card->isInMarket()) {
        continue;
      }
      $cardsInDeck[] = $card;
    }

    Notifications::endOfWeekCreateViceDeck(
      $cardsInDeck,
    );
    ViceCards::move(Utils::returnIds($cardsInDeck), DECK);
    ViceCards::shuffle(DECK);
  }

  /**
   * Deal one card to the gossip pile face down and refill any vacant market
   * spaces with face up cards from the vice deck.
   */
  private function refillMarketAndGossipPile()
  {
    ViceCards::pickOneForLocation(DECK, GOSSIP_PILE);
    Notifications::endOfWeekAddCardToGossipPile();

    ViceCards::refillMarket();
  }

  /**
   * Starting with the player with the candelabra and proceeding clockwise,
   * each player draws one card for each of their draw tokens, then returns
   * those tokens to the supply.
   */
  private function drawCardsForDrawTokens()
  {
    $players = Players::getAll();
    $playerOrder = Players::getTurnOrder(Globals::getCandelabra());

    foreach ($playerOrder as $playerId) {
      $player = $players[$playerId];
      $playerExtra = $player->getExtra();
      $drawTokens = $playerExtra->getDrawTokens();

      if ($drawTokens > 0) {
        $player->drawCards($drawTokens, $drawTokens);
        $playerExtra->setDrawTokens(0);
      }
    }
  }

  /**
   * Discard any item cards on shops and then deal one new item, face up, to
   * each shop site. If the item deck is empty, shuffle the discarded items to
   * form a new item deck.
   */
  private function refillShops()
  {
    $itemsOnShops = Items::getItemsOnShops();
    foreach ($itemsOnShops as $item) {
      $item->discard();
    }
    $sites = Sites::getMany(SHOP_SITES);
    foreach ($sites as $site) {
      $item = Items::getTopOf(DECK);
      $item->setLocation($site->getId());
      Notifications::dealItemToShop($item, $site);
    }
  }

  /**
   * Finally, advance the current week marker to the next week. Play now
   * resumes with the player with the candelabra.
   */
  private function advanceWeekMarker()
  {
    $currentWeek = Globals::incCurrentWeek(1);
    Notifications::phase(clienttranslate('Week ${weekNumber}'), [
      'weekNumber' => $currentWeek,
      'phase' => MOVE_WEEK_MARKER,
      'week' => $currentWeek,
    ]);
  }
}
