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
  private hand: LineStock<ViceCard>;
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

  clearInterface() {
    this.hand.removeAll();
  }

  updateHand() {}

  public setupHand() {
    const node: HTMLElement = $('game_play_area');
    node.insertAdjacentHTML('beforeend', tplHand());

    this.handStock = new HandStock<ViceCard>(
      this.game.viceCardManager,
      document.getElementById('hand'),
      {
        cardOverlap: 'calc(var(--mohoCardScale) * -80px)',
        cardShift: 'calc(var(--mohoCardScale) * 15px)',
      }
    );
    const cards = this.game.gamedatas.players[this.game.getPlayerId()].hand;
    console.log('cards', cards);
    this.handStock.addCards(cards);
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
    await this.hand.addCard(card);
  }

  public async removeCard(card: ViceCard): Promise<void> {
    await this.hand.removeCard(card);
  }

  public getCards(): ViceCard[] {
    return this.hand.getCards() as ViceCard[];
  }

  public getStock(): LineStock<ViceCard> {
    return this.hand;
  }

  public open(): void {
    const handWrapper = $('floating_hand_wrapper');
    if (handWrapper) {
      handWrapper.dataset.open = 'hand';
    }
  }

  public updateCardTooltips() {
    const cards = this.hand.getCards();
    cards.forEach((card) => {
      // this.game.tooltipManager.removeTooltip(card.id);
      // this.game.tooltipManager.addCardTooltip({ nodeId: card.id, cardId: card.id });
    });
  }
}
