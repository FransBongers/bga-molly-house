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
  private static instance: NotificationManager;
  private game: GameAlias;
  private subscriptions: unknown[];
  private id: string;

  constructor(game: GameAlias) {
    this.game = game;
    this.subscriptions = [];
  }

  public static create(game: GameAlias) {
    NotificationManager.instance = new NotificationManager(game);
  }

  public static getInstance() {
    return NotificationManager.instance;
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  setupNotifications() {
    console.log('notifications subscriptions setup');

    dojo.connect(this.game.framework().notifqueue, 'addToLog', () => {
      this.game.addLogClass();
    });

    /**
     * In general:
     * private is only for owning player
     * all is for both players and spectators
     * public / no suffix is for other player and spectators, not owning player
     */
    const notifs: string[] = [
      // Boilerplate
      'log',
      'message',
      'refreshUI',
      'refreshUIPrivate',
      // Game specific
      'addCardFromGossipPile',
      'addCardFromGossipPilePrivate',
      'addCardToHand',
      'addCardToGossipPile',
      'addCardToReputation',
      'addCardToSafePile',
      'addExcessCardsToGossip',
      'addExcessCardsToGossipPrivate',
      'communityAtrophy',
      'dealItemToShop',
      'discardEncounterToken',
      'discardIndictment',
      'discardItem',
      'drawCards',
      'drawCardsPrivate',
      'endOfWeekAddCardToGossipPile',
      'endOfWeekCreateViceDeck',
      'endOfWeekDiscardToSafePile',
      'endOfWeekGenerateEvidence',
      'endOfWeekMollyHouseRaided',
      'endOfWeekRevealEvidence',
      'endOfWeekRevealEvidenceForSuit',
      'gainIndictment',
      'gainIndictmentPrivate',
      'festivityEnd',
      'festivityPlayCard',
      'festivityRevealTopCardViceDeck',
      'festivityPhase',
      'festivitySetRogueValue',
      'festivityWinningSet',
      'hang',
      'gainCubes',
      'gainDrawTokens',
      'loseJoy',
      'loseJoyCommunity',
      'movePawn',
      'phase',
      'placeEncounterToken',
      'placeEncounterTokenPrivate',
      'placePawn',
      'playDress',
      'refillMarket',
      'revealEncounterToken',
      'revealIndictment',
      'rollDice',
      'rollTenSidedDie',
      'scoreBonusJoy',
      'scoreJoy',
      'scoreJoyCommunity',
      'scoreVictoryPoints',
      'setupChooseCardPrivate',
      'setupChooseCard',
      'setupRevealCard',
      'takeCandelabra',
      'takeItem',
      'throwFestivity',
    ];

    // example: https://github.com/thoun/knarr/blob/main/src/knarr.ts
    notifs.forEach((notifName) => {
      this.subscriptions.push(
        dojo.subscribe(notifName, this, (notifDetails: Notif<unknown>) => {
          debug(`notif_${notifName}`, notifDetails); // log notif params (with Tisaac log method, so only studio side)

          const promise = this[`notif_${notifName}`](notifDetails);
          const promises = promise ? [promise] : [];
          let minDuration = 1;

          // Show log messags in page title
          let msg = this.game.format_string_recursive(
            notifDetails.log,
            notifDetails.args as Record<string, unknown>
          );
          // TODO: check if this clearPossible causes any issues?
          // this.game.clearPossible();
          if (msg != '') {
            $('gameaction_status').innerHTML = msg;
            $('pagemaintitletext').innerHTML = msg;
            $('generalactions').innerHTML = '';

            // If there is some text, we let the message some time, to be read
            minDuration = MIN_NOTIFICATION_MS;
          }

          // Promise.all([...promises, sleep(minDuration)]).then(() =>
          //   this.game.framework().notifqueue.onSynchronousNotificationEnd()
          // );
          // tell the UI notification ends, if the function returned a promise.
          if (this.game.animationManager.animationsActive()) {
            Promise.all([...promises, sleep(minDuration)]).then(() =>
              this.game.framework().notifqueue.onSynchronousNotificationEnd()
            );
          } else {
            // TODO: check what this does
            this.game.framework().notifqueue.setSynchronousDuration(0);
          }
        })
      );
      this.game.framework().notifqueue.setSynchronous(notifName, undefined);

      // Setup notifs that need to be ignored
      [
        'addCardFromGossipPile',
        'addExcessCardsToGossip',
        'drawCards',
        'gainIndictment',
        'setupChooseCard',
        'placeEncounterToken',
      ].forEach((notifId) => {
        this.game
          .framework()
          .notifqueue.setIgnoreNotificationCheck(
            notifId,
            (notif: Notif<{ playerId: number }>) =>
              notif.args.playerId == this.game.getPlayerId()
          );
      });
    });
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  destroy() {
    dojo.forEach(this.subscriptions, dojo.unsubscribe);
  }

  getPlayer(playerId: number): MohoPlayer {
    return PlayerManager.getInstance().getPlayer(playerId);
  }

  private gainCubes(player: PlayerAlias, suit: Suit, numberOfCubes) {
    player.counters[SUIT_COLOR_MAP[suit]].incValue(numberOfCubes);
    player.counters[`playerBoard_${SUIT_COLOR_MAP[suit]}`].incValue(
      numberOfCubes
    );
  }

  // .##....##..#######..########.####.########..######.
  // .###...##.##.....##....##.....##..##.......##....##
  // .####..##.##.....##....##.....##..##.......##......
  // .##.##.##.##.....##....##.....##..######....######.
  // .##..####.##.....##....##.....##..##.............##
  // .##...###.##.....##....##.....##..##.......##....##
  // .##....##..#######.....##....####.##........######.

  async notif_log(notif: Notif<unknown>) {
    // this is for debugging php side
    debug('notif_log', notif.args);
  }

  async notif_message(notif: Notif<unknown>) {
    // Only here so messages get displayed in title bar
  }

  async notif_refreshUI(notif: Notif<NotifRefreshUI>) {
    const { data: gamedatas } = notif.args;

    const { players, ...otherData } = gamedatas;

    const updatedGamedatas = {
      ...this.game.gamedatas,
      ...otherData,
    };
    this.game.gamedatas = updatedGamedatas;
    this.game.clearInterface();
    Board.getInstance().updateInterface(updatedGamedatas);
    PlayerManager.getInstance().updateInterface(updatedGamedatas);
    Market.getInstance().updateInterface(updatedGamedatas);
    Festivity.getInstance().updateInterface(updatedGamedatas);
  }

  async notif_refreshUIPrivate(notif: Notif<NotifRefreshUIPrivate>) {
    const {
      playerId,
      hand: handCards,
      encounterTokens,
      indictments,
    } = notif.args;
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

  async notif_phase(notif: Notif<NotifPhase>) {
    const { phase, week } = notif.args;
    if (phase === MOVE_WEEK_MARKER && week) {
      await Board.getInstance().moveWeekMarker(week);
    }
  }

  async notif_addCardFromGossipPile(notif: Notif<NotifAddCardFromGossipPile>) {
    const { playerId } = notif.args;

    Board.getInstance().counters[GOSSIP_PILE].incValue(-1);
    this.getPlayer(playerId).counters[HAND].incValue(1);
  }

  async notif_addCardFromGossipPilePrivate(
    notif: Notif<NotifAddCardFromGossipPilePrivate>
  ) {
    const { playerId, card } = notif.args;
    const player = this.getPlayer(playerId);
    Board.getInstance().counters[GOSSIP_PILE].incValue(-1);
    const hand = Hand.getInstance();
    hand.addCard(getViceCard(card));
    player.counters[HAND].incValue(1);
  }

  async notif_addCardToHand(notif: Notif<NotifAddCardToHand>) {
    const { playerId, card } = notif.args;

    const viceCard = getViceCard(card);
    this.getPlayer(playerId).counters[HAND].incValue(1);
    if (playerId === this.game.getPlayerId()) {
      const hand = Hand.getInstance();

      await hand.addCard(viceCard);
    } else {
      Market.getInstance().stock.removeCard(viceCard);
    }
  }

  async notif_addCardToGossipPile(notif: Notif<NotifAddCardToGossipPile>) {
    const { card, fromLocation } = notif.args;
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

  async notif_addCardToReputation(notif: Notif<NotifAddCardToReputation>) {
    const { playerId, card, from } = notif.args;

    const player = this.getPlayer(playerId);

    const viceCard = getViceCard(card);
    const fromElement =
      this.game.getPlayerId() !== playerId
        ? document.getElementById(`player_board_${playerId}`)
        : undefined;

    if (from.startsWith('hand')) {
      player.counters[HAND].incValue(-1);
    }

    await player.reputation.addCard(viceCard, {
      fromElement,
    });
    player.counters[viceCard.suit].incValue(1);
  }

  async notif_addCardToSafePile(notif: Notif<NotifAddCardToSafePile>) {
    const { card, playerId, community, from } = notif.args;

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

  async notif_addExcessCardsToGossip(
    notif: Notif<NotifAddExcessCardsToGossip>
  ) {
    const { number, playerId, cardsAddedToSafePile, cards } = notif.args;
    const player = this.getPlayer(playerId);

    const market = Market.getInstance();

    player.counters[HAND].incValue(-number);
    if (cardsAddedToSafePile) {
      const promises = cards.map(async (card, index) => {
        await Interaction.use().wait(index * 150);
        await market.addCardToSafePile(getViceCard(card));
      });
      await Promise.all(promises);
    } else {
      Board.getInstance().counters[GOSSIP_PILE].incValue(number);
    }
  }

  async notif_addExcessCardsToGossipPrivate(
    notif: Notif<NotifAddExcessCardsToGossipPrivate>
  ) {
    const { cards, playerId } = notif.args;

    const board = Board.getInstance();
    const market = Market.getInstance();

    this.getPlayer(playerId).counters[HAND].incValue(-cards.length);

    const promises = cards.map(async (card, index) => {
      await Interaction.use().wait(index * 150);
      const viceCard = getViceCard(card);
      // viceCard.location = GOSSIP_PILE;
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

  async notif_communityAtrophy(notif: Notif<NotifCommunityAtrophy>) {
    PlayerManager.getInstance()
      .getPlayerIds()
      .forEach((playerId) => {
        setScore(playerId, 0);
      });
  }

  async notif_dealItemToShop(notif: Notif<NotifDealItemToShop>) {
    const { item } = notif.args;
    await Board.getInstance().shops[item.location].addCard(getItem(item));
  }

  async notif_discardEncounterToken(notif: Notif<NotifDiscardEncounterToken>) {
    const { token } = notif.args;
    await Board.getInstance().encounterTokenDiscard.addCard(token);
  }

  async notif_discardIndictment(notif: Notif<NotifDiscardIndictment>) {
    const { playerId, indictment } = notif.args;
    await Board.getInstance().indictmentDiscard.addCard(indictment);
  }

  async notif_discardItem(notif: Notif<NotifDiscardItem>) {
    const { item } = notif.args;

    await Board.getInstance().itemDiscard.addCard(getItem(item));
  }

  async notif_drawCards(notif: Notif<NotifDrawCards>) {
    const { playerId, number, numberOfDrawTokenToReturn } = notif.args;

    Market.getInstance().incDeckCounter(-number);
    const player = this.getPlayer(playerId);
    player.counters[DRAW_TOKEN].incValue(-numberOfDrawTokenToReturn);
    player.counters[HAND].incValue(number);
  }

  async notif_drawCardsPrivate(notif: Notif<NotifDrawCardsPrivate>) {
    const { cards, playerId, numberOfDrawTokenToReturn } = notif.args;

    const viceCards = cards.map((card) => getViceCard(card));
    const hand = Hand.getInstance();
    const market = Market.getInstance();
    const player = this.getPlayer(playerId);

    player.counters[DRAW_TOKEN].incValue(-numberOfDrawTokenToReturn);
    const promises = viceCards.map(async (card, index) => {
      Interaction.use().wait(index * 150);
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

  async notif_endOfWeekAddCardToGossipPile(notif: Notif<unknown>) {
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

  async notif_endOfWeekCreateViceDeck(
    notif: Notif<NotifEndOfWeekCreateViceDeck>
  ) {
    const { cards } = notif.args;

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
    notif: Notif<NotifEndOfWeekDiscardToSafePile>
  ) {
    const { number, cards } = notif.args;
    Board.getInstance().counters[GOSSIP_PILE].incValue(-number);
    Market.getInstance().incSafePileCounter(number);
  }

  async notif_endOfWeekGenerateEvidence(
    notif: Notif<NotifEndOfWeekGenerateEvidence>
  ) {
    const { site, number } = notif.args;

    Board.getInstance().evidenceCounters[site.id].incValue(number);
  }

  async notif_endOfWeekMollyHouseRaided(
    notif: Notif<NotifEndOfWeekMollyHouseRaided>
  ) {
    const { mollyHouse, adjacentSites } = notif.args;
    const board = Board.getInstance();
    board.setMollyHouseRaided(mollyHouse.id);
    Object.keys(adjacentSites).forEach((siteId) => {
      board.setCruisingSiteDangerous(siteId);
    });

    board.evidenceCounters[mollyHouse.id].incValue(-7);
  }

  async notif_endOfWeekRevealEvidence(
    notif: Notif<NotifEndOfWeekRevealEvidence>
  ) {
    const gatherEvidence = GatherEvidence.getInstance();
    gatherEvidence.setGatherEvidenceActive(true);
  }

  async notif_endOfWeekRevealEvidenceForSuit(
    notif: Notif<NotifEndOfWeekRevealEvidenceForSuit>
  ) {
    const { threats, cards } = notif.args;
    const gatherEvidence = GatherEvidence.getInstance();
    const promises = [];
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

  async notif_festivityEnd(notif: Notif<NotifFestivityEnd>) {
    Board.getInstance().setFestivityActive(false);
    Festivity.getInstance().setFestivityActive(false);
  }

  async notif_festivityPlayCard(notif: Notif<NotifFestivityPlayCard>) {
    const { playerId, card } = notif.args;

    this.getPlayer(playerId).counters[HAND].incValue(-1);
    await Festivity.getInstance().stocks[playerId].addCard(getViceCard(card));
    if (getViceCard(card).displayValue === 'R') {
      Festivity.getInstance().addRogueValue(card.id, card.festivityValue);
    }
  }

  async notif_gainDrawTokens(notif: Notif<NotifGainDrawTokens>) {
    const { playerId, number } = notif.args;
    const player = this.getPlayer(playerId);
    player.counters[DRAW_TOKEN].incValue(number);
  }

  async notif_gainIndictment(notif: Notif<NotifGainIndictment>) {
    const { playerId, indictment } = notif.args;

    await this.getPlayer(playerId).indictments.addCard(indictment);
  }

  async notif_gainIndictmentPrivate(notif: Notif<NotifGainIndictmentPrivate>) {
    const { playerId, indictment } = notif.args;
    await this.getPlayer(playerId).indictments.addCard(indictment);
  }

  async notif_festivityRevealTopCardViceDeck(
    notif: Notif<NotifFestivityRevealTopCardViceDeck>
  ) {
    const { card, cardDrawnFromGossipPile } = notif.args;
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

  async notif_festivityPhase(notif: Notif<NotifFestivityPhase>) {}

  async notif_festivitySetRogueValue(
    notif: Notif<NotifFestivitySetRogueValue>
  ) {
    const { card, value } = notif.args;
    Festivity.getInstance().addRogueValue(card.id, value);
  }

  async notif_festivityWinningSet(notif: Notif<NotifFestivityWinningSet>) {
    const { cards } = notif.args;
  }

  async notif_gainCubes(notif: Notif<NotifGainCubes>) {
    const { playerId, numberOfCubes, suit } = notif.args;
    const player = this.getPlayer(playerId);
    this.gainCubes(player, suit, numberOfCubes);
    // player.counters[SUIT_COLOR_MAP[suit]].incValue(numberOfCubes);
    // player.counters[`playerBoard_${SUIT_COLOR_MAP[suit]}`].incValue(
    //   numberOfCubes
    // );
  }

  async notif_hang(notif: Notif<NotifHang>) {
    const { playerId, joyMarker } = notif.args;
    setScore(playerId, 0);
    this.game.joyMarkerManager.updateCardInformations(joyMarker);
  }

  async notif_loseJoy(notif: Notif<NotifLoseJoy>) {
    const { playerId, amount, total, joyMarker } = notif.args;

    incScore(playerId, -amount);
    Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
  }

  async notif_loseJoyCommunity(notif: Notif<NotifLoseJoyCommunity>) {
    const { joyTotal, joyMarker } = notif.args;
    Board.getInstance().joyMarkerStocks[joyTotal % 40].addCard(joyMarker);
  }

  async notif_movePawn(notif: Notif<NotifMovePawn>) {
    const { from, pawn } = notif.args;

    const board = Board.getInstance();

    await board.movePawn({
      pawn,
      from,
    });
  }

  async notif_playDress(notif: Notif<NotifPlayDress>) {
    const { item } = notif.args;

    await Festivity.getInstance().playedDresses.addCard(getItem(item));
  }

  async notif_placeEncounterToken(notif: Notif<NotifPlaceEncounterToken>) {
    const { siteId, token } = notif.args;
    await Board.getInstance().encounterTokens[siteId].addCard(token);
  }

  async notif_placeEncounterTokenPrivate(
    notif: Notif<NotifPlaceEncounterTokenPrivate>
  ) {
    const { siteId, token } = notif.args;
    await Board.getInstance().encounterTokens[siteId].addCard(token);
  }

  async notif_placePawn(notif: Notif<NotifPlacePawn>) {
    const { playerId, pawn } = notif.args;

    const board = Board.getInstance();

    const player = this.getPlayer(playerId);

    await board.placePawn(
      pawn,
      document.getElementById(`player_board_${playerId}`)
    );
  }

  async notif_refillMarket(notif: Notif<NotifRefillMarket>) {
    const { movedCards, addedCards } = notif.args;

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

  async notif_revealEncounterToken(notif: Notif<NotifRevealEncounterToken>) {
    const { siteId, token } = notif.args;
    this.game.encounterTokenManager.updateCardInformations(token);
  }

  async notif_revealIndictment(notif: Notif<NotifRevealIndictment>) {
    const { playerId, indictment } = notif.args;
    this.game.indictmentManager.updateCardInformations(indictment);
  }

  async notif_rollDice(notif: Notif<NotifRollDice>) {
    const { diceResults } = notif.args;

    Board.getInstance().diceStock.rollDice(getDice(diceResults), {
      effect: 'rollIn',
      duration: [800, 1200],
    });
    await sleep(1200);
  }

  async notif_rollTenSidedDie(notif: Notif<NotifRollTenSidedDie>) {
    const { dieResult } = notif.args;
  }

  async notif_scoreBonusJoy(notif: Notif<NotifScoreBonusJoy>) {
    const { playerId, amount, total, joyMarker } = notif.args;

    incScore(playerId, amount);
    await Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
  }

  async notif_scoreJoy(notif: Notif<NotifScoreJoy>) {
    const { playerId, amount, total, joyMarker } = notif.args;

    incScore(playerId, amount);
    await Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
  }

  async notif_scoreJoyCommunity(notif: Notif<NotifScoreJoyCommunity>) {
    const { joyTotal, joyMarker } = notif.args;
    await Board.getInstance().joyMarkerStocks[joyTotal % 40].addCard(joyMarker);
  }

  async notif_scoreVictoryPoints(notif: Notif<NotifScoreVictoryPoints>) {
    const { playerId, amount } = notif.args;
    incScore(playerId, amount);
  }

  async notif_setupChooseCard(notif: Notif<NotifSetupChooseCard>) {
    const { playerId, card } = notif.args;
    this.getPlayer(playerId).counters[HAND].incValue(-1);
    await this.getPlayer(playerId).reputation.addCard(card as ViceCard, {
      fromElement: document.getElementById(`player_board_${playerId}`),
    });
  }

  async notif_setupChooseCardPrivate(
    notif: Notif<NotifSetupChooseCardPrivate>
  ) {
    const { playerId, card } = notif.args;
    this.getPlayer(playerId).counters[HAND].incValue(-1);
    await this.getPlayer(playerId).reputation.addCard(getViceCard(card));
  }

  async notif_setupRevealCard(notif: Notif<NotifSetupRevealCard>) {
    const { playerId, card } = notif.args;
    const viceCard = getViceCard(card);
    this.game.viceCardManager.updateCardInformations(viceCard);
    this.getPlayer(playerId).counters[viceCard.suit].incValue(1);
  }

  async notif_takeCandelabra(notif: Notif<NotifTakeCandelabra>) {
    const { playerId } = notif.args;
    // TODO
    await PlayerManager.getInstance().moveCandelabraTo(playerId);
  }

  async notif_takeItem(notif: Notif<NotifTakeItem>) {
    const { playerId, item } = notif.args;

    const player = this.getPlayer(playerId);

    await player.items[item.location].addCard(getItem(item));
  }

  async notif_throwFestivity(notif: Notif<NotifThrowFestivity>) {
    const { playerId } = notif.args;
    Board.getInstance().setFestivityActive(true);
    Festivity.getInstance().setRunner(playerId);
    Festivity.getInstance().setFestivityActive(true);
  }
}
