// .##.....##....###....##....##.########.
// .##.....##...##.##...###...##.##.....##
// .##.....##..##...##..####..##.##.....##
// .#########.##.....##.##.##.##.##.....##
// .##.....##.#########.##..####.##.....##
// .##.....##.##.....##.##...###.##.....##
// .##.....##.##.....##.##....##.########.

class Hand {
  private static instance: Hand;
  private game: GameAlias;

  private handStock: HandStock<ViceCard>;

  constructor(game: GameAlias) {
    this.game = game;
    this.setupHand();
  }

  public static create(game: GameAlias) {
    Hand.instance = new Hand(game);
  }

  public static getInstance() {
    return Hand.instance;
  }

  // .##.....##.##....##.########...#######.
  // .##.....##.###...##.##.....##.##.....##
  // .##.....##.####..##.##.....##.##.....##
  // .##.....##.##.##.##.##.....##.##.....##
  // .##.....##.##..####.##.....##.##.....##
  // .##.....##.##...###.##.....##.##.....##
  // ..#######..##....##.########...#######.

  clearInterface() {
    this.handStock.removeAll();
  }

  updateHand(cards: ViceCardBase[]) {
    this.handStock.addCards(cards.map(getViceCard));
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  public setupHand() {
    const node: HTMLElement = $('game_play_area');
    node.insertAdjacentHTML('beforeend', tplHand());

    this.handStock = new HandStock<ViceCard>(
      this.game.viceCardManager,
      document.getElementById('hand'),
      {
        cardOverlap: 'calc(var(--cardScale) * 80px)',
        cardShift: 'calc(var(--cardScale) * 15px)',
      }
    );
    const cards = this.game.gamedatas.players[this.game.getPlayerId()].hand;
    this.updateHand(cards);
  }

  public updateFloatingHandScale() {
    const WIDTH = $('game_play_area').getBoundingClientRect()['width'];

    const wrapperNode = document.getElementById('floating_hand_wrapper');

    const MIN_WIDTH_THREE_CARDS = 800;

    if (WIDTH <= MIN_WIDTH_THREE_CARDS) {
      const handScale = WIDTH / MIN_WIDTH_THREE_CARDS;
      wrapperNode.style.setProperty('--handScale', `${handScale}`);
    } else {
      wrapperNode.style.setProperty('--handScale', '1');
    }
  }

  public async addCard(card: ViceCard): Promise<void> {
    await this.handStock.addCard(card);
  }

  public async removeCard(card: ViceCard): Promise<void> {
    await this.handStock.removeCard(card);
  }

  public getCards(): ViceCard[] {
    return this.handStock.getCards() as ViceCard[];
  }

  public getStock(): HandStock<ViceCard> {
    return this.handStock;
  }

  public open(): void {
    const handWrapper = $('floating_hand_wrapper');
    if (handWrapper) {
      handWrapper.dataset.open = 'hand';
    }
  }

  public updateCardTooltips() {
    const cards = this.handStock.getCards();
    cards.forEach((card) => {
      // this.game.tooltipManager.removeTooltip(card.id);
      // this.game.tooltipManager.addCardTooltip({ nodeId: card.id, cardId: card.id });
    });
  }
}
