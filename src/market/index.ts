class Market {
  private static instance: Market;
  private game: GameAlias;

  public stock: SlotStock<ViceCard>;
  public deck: LineStock<ViceCard>;
  public safePile: LineStock<ViceCard>;
  public counters: Record<string, Counter> = {};
  public safePileModal: CardModal;

  public ui: {
    container: HTMLElement;
    safePile: HTMLElement;
    deck: HTMLElement;
    // market_0: HTMLElement;
    // market_1: HTMLElement;
    // market_2: HTMLElement;
    // market_3: HTMLElement;
  };

  constructor(game: GameAlias) {
    this.game = game;
    this.setup(game.gamedatas);
  }

  public static create(game: GameAlias) {
    Market.instance = new Market(game);
  }

  public static getInstance() {
    return Market.instance;
  }

  // .##.....##.##....##.########...#######.
  // .##.....##.###...##.##.....##.##.....##
  // .##.....##.####..##.##.....##.##.....##
  // .##.....##.##.##.##.##.....##.##.....##
  // .##.....##.##..####.##.....##.##.....##
  // .##.....##.##...###.##.....##.##.....##
  // ..#######..##....##.########...#######.

  public clearInterface() {
    this.stock.removeAll();
    this.safePile.removeAll();
  }

  public updateInterface(gamedatas: GamedatasAlias) {
    this.updateMarket(gamedatas);
    this.updateDeck(gamedatas);
    this.updateSafePile(gamedatas);
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  // Setup functions
  setup(gamedatas: GamedatasAlias) {
    document
      .getElementById('left-column')
      .insertAdjacentHTML('afterbegin', tplMarket(gamedatas));

    this.ui = {
      container: document.getElementById('moho-market'),
      safePile: document.getElementById('moho-safe-pile'),
      deck: document.getElementById('moho-deck'),
      // market_0: document.getElementById('moho-market-0'),
      // market_1: document.getElementById('moho-market-1'),
      // market_2: document.getElementById('moho-market-2'),
      // market_3: document.getElementById('moho-market-3'),
    };
    this.setupModal();

    this.setupDecks(gamedatas);
    this.setupSlotStock(gamedatas);
  }

  private setupModal() {
    this.safePileModal = new CardModal(this.game, SAFE_PILE);
    dojo.connect($(`moho-safe-pile`), 'onclick', () =>
      this.safePileModal.open()
    );
  }

  private setupDecks(gamedatas: GamedatasAlias) {
    this.deck = new LineStock<ViceCard>(
      this.game.viceCardManager,
      this.ui.deck,
      {}
    );
    this.safePile = new LineStock<ViceCard>(
      this.game.viceCardManager,
      this.ui.safePile,
      {}
    );

    this.counters[DECK] = new ebg.counter();
    this.counters[DECK].create('moho-deck-counter');
    this.counters[SAFE_PILE] = new ebg.counter();
    this.counters[SAFE_PILE].create('moho-safe-pile-counter');
    this.updateDeck(gamedatas);
    this.updateSafePile(gamedatas);
  }

  private setupSlotStock(gamedatas: GamedatasAlias) {
    this.stock = new SlotStock<ViceCard>(
      this.game.viceCardManager,
      document.getElementById('moho-market-slots'),
      {
        slotsIds: MARKET_SPOTS,
        slotClasses: ['moho-market-slot'],
        mapCardToSlot: (card: ViceCard) => {
          // Map the card to a slot based on its location
          return card.location;
        },
        gap: 'calc(var(--cardScale) * 16px)',
      }
    );
    // this.gossipPile = new Deck<ViceCard>(
    //   this.game.viceCardManager,
    //   this.ui.containers.gossipPile,
    //   { cardNumber: 10, thicknesses: [0, 2, 5, 10, 20, 30] }
    // );
    this.updateMarket(gamedatas);
  }

  // .##.....##.########..########.....###....########.########....##.....##.####
  // .##.....##.##.....##.##.....##...##.##......##....##..........##.....##..##.
  // .##.....##.##.....##.##.....##..##...##.....##....##..........##.....##..##.
  // .##.....##.########..##.....##.##.....##....##....######......##.....##..##.
  // .##.....##.##........##.....##.#########....##....##..........##.....##..##.
  // .##.....##.##........##.....##.##.....##....##....##..........##.....##..##.
  // ..#######..##........########..##.....##....##....########.....#######..####

  private updateMarket(gamedatas: GamedatasAlias) {
    this.stock.addCards(Object.values(gamedatas.market).map(getViceCard));
  }

  private updateDeck(gamedatas: GamedatasAlias) {
    this.counters[DECK].setValue(gamedatas.deckCount);
  }

  private updateSafePile(gamedatas: GamedatasAlias) {
    this.safePileModal.addCards(Object.values(gamedatas.safePile));
    this.counters[SAFE_PILE].setValue(Object.keys(gamedatas.safePile).length);

    this.ui.safePile.setAttribute(
      'data-card-id',
      gamedatas.topOfSafePile ? gamedatas.topOfSafePile.id : 'none'
    );
  }

  public async addCardToSafePile(viceCard: ViceCard) {
    await this.safePile.addCard(getViceCard(viceCard));
    this.ui.safePile.setAttribute('data-card-id', viceCard.id);
    await this.safePile.removeCard(viceCard);
    await this.safePileModal.addCard(viceCard);
    this.counters[SAFE_PILE].incValue(1);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public incDeckCounter(value: number) {
    this.counters[DECK].incValue(value);
    if (this.counters[DECK].getValue() === 0) {
      this.ui.deck.classList.add('moho-empty');
    } else {
      this.ui.deck.classList.remove('moho-empty');
    }
  }

  public incSafePileCounter(value: number) {
    this.counters[SAFE_PILE].incValue(value);
    if (this.counters[SAFE_PILE].getValue() === 0) {
      this.ui.safePile.setAttribute('data-card-id', 'none');
    }
  }
}
