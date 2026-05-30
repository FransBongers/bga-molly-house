//  .##....##..#######..########.####.########
//  .###...##.##.....##....##.....##..##......
//  .####..##.##.....##....##.....##..##......
//  .##.##.##.##.....##....##.....##..######..
//  .##..####.##.....##....##.....##..##......
//  .##...###.##.....##....##.....##..##......
//  .##....##..#######.....##....####.##......

//  .##.....##....###....##....##....###.....######...########.########.
//  .###...###...##.##...###...##...##.##...##....##..##.......##.....##
//  .####.####..##...##..####..##..##...##..##........##.......##.....##
//  .##.###.##.##.....##.##.##.##.##.....##.##...####.######...########.
//  .##.....##.#########.##..####.#########.##....##..##.......##...##..
//  .##.....##.##.....##.##...###.##.....##.##....##..##.......##....##.
//  .##.....##.##.....##.##....##.##.....##..######...########.##.....##

const MIN_NOTIFICATION_MS = 1200;

class NotificationManager {
  // private static instance: NotificationManager;
  private game: GameAlias;
  private subscriptions: unknown[];

  constructor(game: GameAlias) {
    this.game = game;
    this.subscriptions = [];
  }

  // public static create(game: GameAlias) {
  //   // NotificationManager.instance = new NotificationManager(game);
  // }

  // public static getInstance() {
  //   return NotificationManager.instance;
  // }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  setupNotifications() {
    console.log('notifications subscriptions setup');

    this.game.bga.notifications.setupPromiseNotifications({
      prefix: 'notif_', // default is 'notif_'
      minDuration: 1200, // for longer animations (500 by default)
      minDurationNoText: 1,
      handlers: [this.game.notificationManager], // if you write your notif function in a subclass instead of this (default this)
      logger: debug, // show notif debug informations on console. Could be console.warn or any custom debug function (default null = no logs)
      // ignoreNotifications: ['updateAutoPlay'], // the notif_updateAutoPlay function will be ignored by bgaSetupPromiseNotifications. You'll need to subscribe to it manually
      onStart: (notifName: string, msg: string, args: any) => {
        if (msg != '') {
          $('gameaction_status').innerHTML = msg;
          $('pagemaintitletext').innerHTML = msg;
          $('generalactions').innerHTML = '';

          // If there is some text, we let the message some time, to be read
        }
        // this.game.bga.statusBar.setTitle(msg);
      },
    });
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  getPlayer(playerId: number): MohoPlayer {
    return PlayerManager.getInstance().getPlayer(playerId);
  }

  private gainCubes(player: PlayerAlias, suit: Suit, numberOfCubes: number) {
    player.counters[SUIT_COLOR_MAP[suit]].incValue(numberOfCubes);
    player.counters[`playerBoard_${SUIT_COLOR_MAP[suit]}`].incValue(
      numberOfCubes,
    );
  }

  // .##....##..#######..########.####.########..######.
  // .###...##.##.....##....##.....##..##.......##....##
  // .####..##.##.....##....##.....##..##.......##......
  // .##.##.##.##.....##....##.....##..######....######.
  // .##..####.##.....##....##.....##..##.............##
  // .##...###.##.....##....##.....##..##.......##....##
  // .##....##..#######.....##....####.##........######.

  async notif_log(notif: unknown) {
    // this is for debugging php side
    debug('notif_log', notif);
  }

  async notif_message(notif: unknown) {
    // Only here so messages get displayed in title bar
  }

  async notif_restoreGameState(notif: NotifRestoreGameState) {
    this.game.onCancel();
  }

  async notif_refreshUI(notif: NotifRefreshUI) {
    const { data: gamedatas } = notif;

    const { players, ...otherData } = gamedatas;

    const updatedGamedatas = {
      ...this.game.gamedatas,
      ...otherData,
    };

    Object.entries(players!).forEach(([playerIdKey, playerData]) => {
      const playerId = Number(playerIdKey);
      if (updatedGamedatas.players[playerId]) {
        updatedGamedatas.players[playerId].cubes = playerData.cubes;
        updatedGamedatas.players[playerId].items = playerData.items;
        updatedGamedatas.players[playerId].reputation = playerData.reputation;
        updatedGamedatas.players[playerId].festivity = playerData.festivity;
      }
    });

    this.game.gamedatas = updatedGamedatas;
    this.game.clearInterface();
    Board.getInstance().updateInterface(updatedGamedatas);
    PlayerManager.getInstance().updateInterface(updatedGamedatas);
    Market.getInstance().updateInterface(updatedGamedatas);
    Festivity.getInstance().updateInterface(updatedGamedatas);
  }

  async notif_refreshUIPrivate(notif: NotifRefreshUIPrivate) {
    const { playerId, hand: handCards, encounterTokens, indictments } = notif;
    const player = this.getPlayer(playerId);
    player.indictments.removeAll();
    player.encounterTokens.removeAll();
    player.updatePrivateData({
      encounterTokens,
      indictments,
    } as PlayerDataAlias);
    const hand = Hand.getInstance();
    hand.clearInterface();
    hand.updateHand(handCards);
  }

  async notif_phase(notif: NotifPhase) {
    const { phase, week } = notif;
    if (phase === MOVE_WEEK_MARKER && week) {
      await Board.getInstance().moveWeekMarker(week);
    }
  }

  async notif_addCardFromGossipPile(notif: NotifAddCardFromGossipPile) {
    const { playerId, _private } = notif;

    const player = this.getPlayer(playerId);
    const board = Board.getInstance();

    board.counters[GOSSIP_PILE].incValue(-1);
    if (!_private) {
      player.counters[HAND].incValue(1);
      return;
    }
    const { card } = _private;

    const hand = Hand.getInstance();
    await hand.addCard(getViceCard(card));
    player.counters[HAND].incValue(1);
  }

  async notif_addCardToHand(notif: NotifAddCardToHand) {
    const { playerId, card } = notif;

    const viceCard = getViceCard(card);
    this.getPlayer(playerId).counters[HAND].incValue(1);
    if (playerId === this.game.getPlayerId()) {
      const hand = Hand.getInstance();

      await hand.addCard(viceCard);
    } else {
      Market.getInstance().stock.removeCard(viceCard);
    }
  }

  async notif_addCardToGossipPile(notif: NotifAddCardToGossipPile) {
    const { card, fromLocation } = notif;
    const viceCard = getViceCard(card);
    const board = Board.getInstance();
    if (fromLocation.startsWith('reputation')) {
      const playerId = Number(fromLocation.split('_')[1]);

      this.getPlayer(playerId).counters[viceCard.suit].incValue(-1);
    } else if (fromLocation.startsWith('hand')) {
      const playerId = Number(fromLocation.split('_')[1]);
      this.getPlayer(playerId).counters[HAND].incValue(-1);
    }
    await board.gossipPile.addCard(viceCard);
    board.counters[GOSSIP_PILE].incValue(1);
    await this.game.viceCardManager.removeCard(viceCard);
  }

  async notif_addCardToReputation(notif: NotifAddCardToReputation) {
    const { playerId, card, from } = notif;

    const player = this.getPlayer(playerId);

    const viceCard = getViceCard(card);
    const fromElement =
      this.game.getPlayerId() !== playerId
        ? document.getElementById(`player_board_${playerId}`)!
        : undefined;

    if (from.startsWith('hand')) {
      player.counters[HAND].incValue(-1);
    }

    await player.reputation.addCard(viceCard, {
      fromElement,
    });
    player.counters[viceCard.suit].incValue(1);
  }

  async notif_addCardToSafePile(notif: NotifAddCardToSafePile) {
    const { card, playerId, community, from } = notif;

    const viceCard = getViceCard(card);

    if (from.startsWith('reputation_') && !community && playerId) {
      this.getPlayer(playerId).counters[viceCard.suit].incValue(-1);
    } else if (from.startsWith('hand')) {
      const playerId = Number(from.split('_')[1]);
      this.getPlayer(playerId).counters[HAND].incValue(-1);
    }

    const market = Market.getInstance();
    await market.addCardToSafePile(viceCard);
  }

  async notif_addExcessCardsToGossip(notif: NotifAddExcessCardsToGossip) {
    const { number, playerId, cardsAddedToSafePile, cards, _private } = notif;
    const player = this.getPlayer(playerId);

    const board = Board.getInstance();
    const market = Market.getInstance();

    player.counters[HAND].incValue(-number);

    if (!_private) {
      if (cardsAddedToSafePile) {
        const promises = cards.map(async (card, index) => {
          await Interaction.use().wait(index * 150);
          await market.addCardToSafePile(getViceCard(card));
        });
        await Promise.all(promises);
      } else {
        Board.getInstance().counters[GOSSIP_PILE].incValue(number);
      }
      return;
    }

    const { cards: privateCards } = _private;

    const promises = privateCards.map(async (card, index) => {
      await Interaction.use().wait(index * 150);
      const viceCard = getViceCard(card);

      if (viceCard.location === GOSSIP_PILE) {
        await board.gossipPile.addCard(viceCard);
        board.counters[GOSSIP_PILE].incValue(1);
        await this.game.viceCardManager.removeCard(viceCard);
      } else if (viceCard.location === SAFE_PILE) {
        await market.addCardToSafePile(viceCard);
      }
    });

    await Promise.all(promises);
  }

  async notif_communityAtrophy(notif: NotifCommunityAtrophy) {
    PlayerManager.getInstance()
      .getPlayerIds()
      .forEach((playerId) => {
        setScore(playerId, 0);
      });
  }

  async notif_dealItemToShop(notif: NotifDealItemToShop) {
    const { item } = notif;
    await Board.getInstance().shops[item.location].addCard(getItem(item));
  }

  async notif_discardEncounterToken(notif: NotifDiscardEncounterToken) {
    const { token } = notif;
    await Board.getInstance().encounterTokenDiscard.addCard(token);
  }

  async notif_discardIndictment(notif: NotifDiscardIndictment) {
    const { playerId, indictment } = notif;
    await Board.getInstance().indictmentDiscard.addCard(indictment);
  }

  async notif_discardItem(notif: NotifDiscardItem) {
    const { item } = notif;

    await Board.getInstance().itemDiscard.addCard(getItem(item));
  }

  async notif_drawCards(notif: NotifDrawCards) {
    const { playerId, number, numberOfDrawTokenToReturn, _private } = notif;

    const market = Market.getInstance();
    const player = this.getPlayer(playerId);

    if (!_private) {
      market.incDeckCounter(-number);
      player.counters[DRAW_TOKEN].incValue(-numberOfDrawTokenToReturn);
      player.counters[HAND].incValue(number);
      return;
    }

    const { cards } = _private;

    const viceCards = cards.map((card) => getViceCard(card));
    const hand = Hand.getInstance();

    player.counters[DRAW_TOKEN].incValue(-numberOfDrawTokenToReturn);
    const promises = viceCards.map(async (card, index) => {
      await Interaction.use().wait(index * 150);
      const location = card.location;
      card.location = DECK;

      // Add card to deck
      await market.deck.addCard(card);
      card.location = location;

      // Add card to hand
      market.incDeckCounter(-1);
      await hand.addCard(card);
      player.counters[HAND].incValue(1);
    });

    await Promise.all(promises);
  }

  async notif_endOfWeekAddCardToGossipPile(notif: unknown) {
    const fakeCard: ViceCard = {
      id: 'fakeCardId',
      location: DECK,
    } as ViceCard;

    const market = Market.getInstance();
    const board = Board.getInstance();
    await market.deck.addCard(fakeCard);
    fakeCard.location = GOSSIP_PILE;
    market.incDeckCounter(-1);
    await board.gossipPile.addCard(fakeCard);
    board.counters[GOSSIP_PILE].incValue(1);
    await this.game.viceCardManager.removeCard(fakeCard);
  }

  async notif_endOfWeekCreateViceDeck(notif: NotifEndOfWeekCreateViceDeck) {
    const { cards } = notif;

    const market = Market.getInstance();
    const board = Board.getInstance();

    const promises = cards.map(async (card, index) => {
      await Interaction.use().wait(index * 100);
      const viceCard = getViceCard(card);
      if (card.location === SAFE_PILE) {
        await market.safePile.addCard(viceCard);
        market.incSafePileCounter(-1);
      }

      if (card.location === GOSSIP_PILE) {
        // Note: this should never happen as all cards are removed
        // from the Gossip Pile?
        await board.gossipPile.addCard(viceCard);
        board.counters[GOSSIP_PILE].incValue(-1);
      }
      card.location = DECK;

      await market.deck.addCard(viceCard);
      market.incDeckCounter(1);
      this.game.viceCardManager.removeCard(viceCard);
    });

    await Promise.all(promises);
    GatherEvidence.getInstance().setGatherEvidenceActive(false);
  }

  async notif_endOfWeekDiscardToSafePile(
    notif: NotifEndOfWeekDiscardToSafePile,
  ) {
    const { number, cards } = notif;
    Board.getInstance().counters[GOSSIP_PILE].incValue(-number);
    Market.getInstance().incSafePileCounter(number);
  }

  async notif_endOfWeekGenerateEvidence(notif: NotifEndOfWeekGenerateEvidence) {
    const { site, number } = notif;

    Board.getInstance().evidenceCounters[site.id].incValue(number);
  }

  async notif_endOfWeekMollyHouseRaided(notif: NotifEndOfWeekMollyHouseRaided) {
    const { mollyHouse, adjacentSites } = notif;
    const board = Board.getInstance();
    board.setMollyHouseRaided(mollyHouse.id);
    Object.keys(adjacentSites).forEach((siteId) => {
      board.setCruisingSiteDangerous(siteId);
    });

    board.evidenceCounters[mollyHouse.id].incValue(-7);
  }

  async notif_endOfWeekRevealEvidence(notif: NotifEndOfWeekRevealEvidence) {
    const gatherEvidence = GatherEvidence.getInstance();
    gatherEvidence.setGatherEvidenceActive(true);
  }

  async notif_endOfWeekRevealEvidenceForSuit(
    notif: NotifEndOfWeekRevealEvidenceForSuit,
  ) {
    const { threats, cards } = notif;
    const gatherEvidence = GatherEvidence.getInstance();
    const promises: Promise<void>[] = [];
    let counter = 0;
    threats.forEach((card: ViceCardBase) => {
      promises.push(gatherEvidence.addCard(card, counter));
      counter++;
    });
    cards.forEach((card: ViceCardBase) => {
      promises.push(gatherEvidence.addCard(card, counter));
      counter++;
    });

    await Promise.all(promises);
  }

  async notif_festivityEnd(notif: NotifFestivityEnd) {
    Board.getInstance().setFestivityActive(false);
    Festivity.getInstance().setFestivityActive(false);
  }

  async notif_festivityPlayCard(notif: NotifFestivityPlayCard) {
    const { playerId, card } = notif;

    this.getPlayer(playerId).counters[HAND].incValue(-1);
    await Festivity.getInstance().stocks[playerId].addCard(getViceCard(card));
    if (getViceCard(card).displayValue === 'R') {
      Festivity.getInstance().addRogueValue(card.id, card.festivityValue);
    }
  }

  async notif_gainDrawTokens(notif: NotifGainDrawTokens) {
    const { playerId, number } = notif;
    const player = this.getPlayer(playerId);
    player.counters[DRAW_TOKEN].incValue(number);
  }

  async notif_gainIndictment(notif: NotifGainIndictment) {
    const { playerId, _private } = notif;
    const indictment = _private ? _private.indictment : notif.indictment;

    await this.getPlayer(playerId).indictments.addCard(indictment);
  }

  async notif_festivityRevealTopCardViceDeck(
    notif: NotifFestivityRevealTopCardViceDeck,
  ) {
    const { card, cardDrawnFromGossipPile } = notif;
    const viceCard = getViceCard(card);
    const location = viceCard.location;
    // Add card to deck
    viceCard.location = cardDrawnFromGossipPile ? GOSSIP_PILE : DECK;
    const market = Market.getInstance();
    if (cardDrawnFromGossipPile) {
      Board.getInstance().gossipPile.addCard(viceCard);
    } else {
      await market.deck.addCard(viceCard);
    }

    // Play card to festivity
    viceCard.location = location;
    if (cardDrawnFromGossipPile) {
      Board.getInstance().counters[GOSSIP_PILE].incValue(-1);
    } else {
      market.incDeckCounter(-1);
    }

    await Festivity.getInstance().stocks[COMMUNITY].addCard(viceCard);
  }

  async notif_festivityPhase(notif: NotifFestivityPhase) {}

  async notif_festivitySetRogueValue(notif: NotifFestivitySetRogueValue) {
    const { card, value } = notif;
    Festivity.getInstance().addRogueValue(card.id, value);
  }

  async notif_festivityWinningSet(notif: NotifFestivityWinningSet) {
    const { cards } = notif;
  }

  async notif_gainCubes(notif: NotifGainCubes) {
    const { playerId, numberOfCubes, suit } = notif;
    const player = this.getPlayer(playerId);
    this.gainCubes(player, suit, numberOfCubes);
    // player.counters[SUIT_COLOR_MAP[suit]].incValue(numberOfCubes);
    // player.counters[`playerBoard_${SUIT_COLOR_MAP[suit]}`].incValue(
    //   numberOfCubes
    // );
  }

  async notif_hang(notif: NotifHang) {
    const { playerId, joyMarker } = notif;
    setScore(playerId, 0);
    this.game.joyMarkerManager.updateCardInformations(joyMarker);
  }

  async notif_loseJoy(notif: NotifLoseJoy) {
    const { playerId, amount, total, joyMarker } = notif;

    incScore(playerId, -amount);
    Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
  }

  async notif_loseJoyCommunity(notif: NotifLoseJoyCommunity) {
    const { joyTotal, joyMarker } = notif;
    Board.getInstance().joyMarkerStocks[joyTotal % 40].addCard(joyMarker);
  }

  async notif_movePawn(notif: NotifMovePawn) {
    const { from, pawn } = notif;

    const board = Board.getInstance();

    await board.movePawn({
      pawn,
      from,
    });
  }

  async notif_playDress(notif: NotifPlayDress) {
    const { item } = notif;

    await Festivity.getInstance().playedItems.addCard(getItem(item));
  }

  async notif_playItemToFestivity(notif: NotifPlayItemToFestivity) {
    const { item } = notif;

    await Festivity.getInstance().playedItems.addCard(getItem(item));
  }

  async notif_placeEncounterToken(notif: NotifPlaceEncounterToken) {
    const { _private } = notif;
    const siteId = _private ? _private.siteId : notif.siteId;
    const token = _private ? _private.token : notif.token;
    await Board.getInstance().encounterTokens[siteId].addCard(token);
  }

  async notif_placePawn(notif: NotifPlacePawn) {
    const { playerId, pawn } = notif;

    const board = Board.getInstance();

    const player = this.getPlayer(playerId);

    await board.placePawn(
      pawn,
      document.getElementById(`player_board_${playerId}`)!,
    );
  }

  async notif_refillMarket(notif: NotifRefillMarket) {
    const { movedCards, addedCards } = notif;

    const market = Market.getInstance();

    const promises = movedCards.concat(addedCards).map(async (card, index) => {
      const viceCard = getViceCard(card);
      // console.group('Refill market card');
      // console.log('card', card);
      // console.log('index', index);
      // console.log('viceCard', viceCard);
      // console.groupEnd();

      await Interaction.use().wait(index * 200);

      if (movedCards.some((movedCard) => movedCard.id === card.id)) {
        await market.stock.addCard(viceCard);
      } else {
        const location = viceCard.location;
        viceCard.location = DECK;
        await market.deck.addCard(viceCard);
        viceCard.location = location;
        market.incDeckCounter(-1);
        await market.stock.addCard(viceCard);
      }
    });

    await Promise.all(promises);
  }

  async notif_revealEncounterToken(notif: NotifRevealEncounterToken) {
    const { siteId, token } = notif;
    this.game.encounterTokenManager.updateCardInformations(token);
  }

  async notif_revealIndictment(notif: NotifRevealIndictment) {
    const { playerId, indictment } = notif;
    this.game.indictmentManager.updateCardInformations(indictment);
  }

  async notif_rollDice(notif: NotifRollDice) {
    const { diceResults } = notif;

    Board.getInstance().diceStock.rollDice(getDice(diceResults), {
      effect: 'rollIn',
      duration: [800, 1200],
    });
    await sleep(1200);
  }

  async notif_rollTenSidedDie(notif: NotifRollTenSidedDie) {
    const { dieResult } = notif;
  }

  async notif_scoreBonusJoy(notif: NotifScoreBonusJoy) {
    const { playerId, amount, total, joyMarker } = notif;

    incScore(playerId, amount);
    await Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
  }

  async notif_scoreJoy(notif: NotifScoreJoy) {
    const { playerId, amount, total, joyMarker } = notif;

    incScore(playerId, amount);
    await Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
  }

  async notif_scoreJoyCommunity(notif: NotifScoreJoyCommunity) {
    const { joyTotal, joyMarker } = notif;
    await Board.getInstance().joyMarkerStocks[joyTotal % 40].addCard(joyMarker);
  }

  async notif_scoreVictoryPoints(notif: NotifScoreVictoryPoints) {
    const { playerId, amount } = notif;
    incScore(playerId, amount);
  }

  async notif_setupChooseCard(notif: NotifSetupChooseCard) {
    const { playerId, card, _private } = notif;
    this.getPlayer(playerId).counters[HAND].incValue(-1);
    if (_private) {
      await this.getPlayer(playerId).reputation.addCard(
        getViceCard(_private.card),
      );
    } else {
      await this.getPlayer(playerId).reputation.addCard(card as ViceCard, {
        fromElement: document.getElementById(`player_board_${playerId}`)!,
      });
    }
  }

  async notif_setupRevealCard(notif: NotifSetupRevealCard) {
    const { playerId, card } = notif;
    const viceCard = getViceCard(card);
    this.game.viceCardManager.updateCardInformations(viceCard);
    this.getPlayer(playerId).counters[viceCard.suit].incValue(1);
  }

  async notif_takeCandelabra(notif: NotifTakeCandelabra) {
    const { playerId } = notif;
    // TODO
    await PlayerManager.getInstance().moveCandelabraTo(playerId);
  }

  async notif_takeItem(notif: NotifTakeItem) {
    const { playerId, item } = notif;

    const player = this.getPlayer(playerId);

    await player.items[item.location].addCard(getItem(item));
  }

  async notif_throwFestivity(notif: NotifThrowFestivity) {
    const { playerId } = notif;
    Board.getInstance().setFestivityActive(true);
    Festivity.getInstance().setRunner(playerId);
    Festivity.getInstance().setFestivityActive(true);
  }

  async notif_useDomino(notif: NotifUseDomino) {
    const { playerId, playedCard, communityCard } = notif;
    const festivity = Festivity.getInstance();
    await Promise.all(
      [playedCard, communityCard].map(async (card, index) => {
        Interaction.use().wait(200 * index);
        const viceCard = getViceCard(card);
        if (index === 0) {
          await festivity.stocks[COMMUNITY].addCard(viceCard);
        } else {
          await festivity.stocks[playerId].addCard(viceCard);
        }
      }),
    );
  }

  async notif_undoPlayerSetupChooseCard(notif: NotifUndoPlayerSetupChooseCard) {
    const { playerId, _private, card } = notif;
    const player = this.getPlayer(playerId);
    if (_private) {
      await Hand.getInstance().addCard(getViceCard(_private.card));
    } else {
      this.game.viceCardManager.removeCard(card as ViceCard);
    }
    player.counters[HAND].incValue(1);
  }
}
