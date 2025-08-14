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
      // Game specific
      'addCardToHand',
      'addCardToGossipPile',
      'addCardToReputation',
      'addCardToSafePile',
      'addExcessCardsToGossip',
      'addExcessCardsToGossipPrivate',
      'drawCards',
      'drawCardsPrivate',
      'festivityEnd',
      'festivityPlayCard',
      'festivityRevealTopCardViceDeck',
      'festivityPhase',
      'festivitySetRogueValue',
      'festivityWinningSet',
      'gainCubes',
      'loseJoy',
      'loseJoyCommunity',
      'movePawn',
      'placePawn',
      'refillMarket',
      'rollDice',
      'scoreBonusJoy',
      'scoreJoy',
      'scoreJoyCommunity',
      'setupChooseCardPrivate',
      'setupChooseCard',
      'setupRevealCard',
      'startOfTurn',
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
      ['addExcessCardsToGossip', 'drawCards', 'setupChooseCard'].forEach(
        (notifId) => {
          this.game
            .framework()
            .notifqueue.setIgnoreNotificationCheck(
              notifId,
              (notif: Notif<{ playerId: number }>) =>
                notif.args.playerId == this.game.getPlayerId()
            );
        }
      );
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
    const { card } = notif.args;

    const board = Board.getInstance();
    await board.gossipPile.addCard(getViceCard(card));
  }

  async notif_addCardToReputation(notif: Notif<NotifAddCardToReputation>) {
    const { playerId, card } = notif.args;

    const player = this.getPlayer(playerId);

    const viceCard = getViceCard(card);
    const fromElement =
      this.game.getPlayerId() !== playerId
        ? document.getElementById(`player_board_${playerId}`)
        : undefined;

    player.counters[HAND].incValue(-1);
    await player.reputation.addCard(viceCard, {
      fromElement,
    });
    player.counters[viceCard.suit].incValue(1);
  }

  async notif_addCardToSafePile(notif: Notif<NotifAddCardToSafePile>) {
    const { card } = notif.args;

    const market = Market.getInstance();
    await market.safePile.addCard(getViceCard(card));
  }

  async notif_addExcessCardsToGossip(
    notif: Notif<NotifAddExcessCardsToGossip>
  ) {
    const { number, playerId } = notif.args;
    const player = this.getPlayer(playerId);
    player.counters[HAND].incValue(-number);
    // TODO update counters
  }

  async notif_addExcessCardsToGossipPrivate(
    notif: Notif<NotifAddExcessCardsToGossipPrivate>
  ) {
    const { cards, playerId } = notif.args;

    const board = Board.getInstance();

    this.getPlayer(playerId).counters[HAND].incValue(-cards.length);
    await board.gossipPile.addCards(cards.map(getViceCard));
  }

  async notif_drawCards(notif: Notif<NotifDrawCards>) {
    const { playerId, number } = notif.args;

    // TODO: update player panel
    this.getPlayer(playerId).counters[HAND].incValue(number);
  }

  async notif_drawCardsPrivate(notif: Notif<NotifDrawCardsPrivate>) {
    const { cards, playerId } = notif.args;

    const viceCards = cards.map((card) => getViceCard(card));
    const hand = Hand.getInstance();
    const player = this.getPlayer(playerId);
    const promises = viceCards.map(async (card, index) => {
      // TODO: add card to deck before drawing
      // await this.game.framework().wait(index * 150);
      // await hand.getStock().addCard(card, {
      //   fromElement: document.getElementById('moho-deck'),
      // });
      await hand.addCard(card);
      player.counters[HAND].incValue(1);
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
  }

  async notif_festivityRevealTopCardViceDeck(
    notif: Notif<NotifFestivityRevealTopCardViceDeck>
  ) {
    const { card } = notif.args;

    await Festivity.getInstance().stocks[COMMUNITY].addCard(getViceCard(card));
  }

  async notif_festivityPhase(notif: Notif<NotifFestivityPhase>) {}

  async notif_festivitySetRogueValue(
    notif: Notif<NotifFestivitySetRogueValue>
  ) {
    const { playerId, value } = notif.args;
    // Festivity.getInstance().setRogueValue(playerId, value);
  }

  async notif_festivityWinningSet(notif: Notif<NotifFestivityWinningSet>) {
    const { cards } = notif.args;
  }

  async notif_gainCubes(notif: Notif<NotifGainCubes>) {
    const { playerId, numberOfCubes, suit } = notif.args;
    const player = this.getPlayer(playerId);
    player.counters[SUIT_COLOR_MAP[suit]].incValue(numberOfCubes);
  }

  async notif_loseJoy(notif: Notif<NotifLoseJoy>) {
    const { playerId, amount } = notif.args;

    incScore(playerId, -amount);
  }

  async notif_loseJoyCommunity(notif: Notif<NotifLoseJoyCommunity>) {
    const { joyDecrease, joyTotal } = notif.args;
  }

  async notif_movePawn(notif: Notif<NotifMovePawn>) {
    const { from, pawn } = notif.args;

    const board = Board.getInstance();

    await board.movePawn({
      pawn,
      from,
    });
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
    const { cards } = notif.args;
    // TODO animation
    const market = Market.getInstance();
    await market.stock.addCards(cards.map(getViceCard));
  }

  async notif_rollDice(notif: Notif<NotifRollDice>) {
    const { diceResults } = notif.args;

    Board.getInstance().diceStock.rollDice(getDice(diceResults), {
      effect: 'rollIn',
      duration: [800, 1200],
    });
    await sleep(1200);
  }

  async notif_scoreBonusJoy(notif: Notif<NotifScoreBonusJoy>) {
    const { playerId, amount } = notif.args;

    incScore(playerId, amount);
  }

  async notif_scoreJoy(notif: Notif<NotifScoreJoy>) {
    const { playerId, amount } = notif.args;

    incScore(playerId, amount);
  }

  async notif_scoreJoyCommunity(notif: Notif<NotifScoreJoyCommunity>) {
    const { joyIncrease, joyTotal } = notif.args;
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

  async notif_startOfTurn(notif: Notif<NotifStartOfTurn>) {}

  async notif_throwFestivity(notif: Notif<NotifThrowFestivity>) {
    Board.getInstance().setFestivityActive(true);
    Festivity.getInstance().setFestivityActive(true);
  }
}
