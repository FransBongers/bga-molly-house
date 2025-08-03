class Market {
  private static instance: Market;
  private game: GameAlias;

  public stock: SlotStock<ViceCard>;
  public deck: Deck<ViceCard>;

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

    this.setupDeck(gamedatas);
    this.setupSlotStock(gamedatas);
  }

  private setupDeck(gamedatas: GamedatasAlias) {
    this.deck = new Deck<ViceCard>(this.game.viceCardManager, this.ui.deck, {
      cardNumber: gamedatas.deckCount,
      thicknesses: [100],
      counter: {
        show: true,
        position: 'center'
      }
    });
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
    this.stock.addCards(gamedatas.market);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...
}
