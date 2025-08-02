class Board {
  private static instance: Board;
  private game: GameAlias;

  public gossipPile: Deck<ViceCard>;

  public ui: {
    containers: {
      board: HTMLElement;
      gossipPile: HTMLElement;
      houseRaidedMarkers: HTMLElement;
      pawns: {
        joy?: HTMLElement;
        week?: HTMLElement;
      };
      selectBoxes: HTMLElement;
    };
    houseRaidedMarkers: Record<string, HTMLElement>;
    selectBoxes: Record<string, HTMLElement>;
  };

  constructor(game: GameAlias) {
    this.game = game;
    this.setup(game.gamedatas);
  }

  public static create(game: GameAlias) {
    Board.instance = new Board(game);
  }

  public static getInstance() {
    return Board.instance;
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
      .insertAdjacentHTML('afterbegin', tplBoard(gamedatas));

    this.ui = {
      containers: {
        board: document.getElementById('moho-board'),
        gossipPile: document.getElementById('moho-gossip-pile'),
        pawns: {},
        selectBoxes: document.getElementById('moho-select-boxes'),
        houseRaidedMarkers: document.getElementById('house-raided-markers'),
      },
      selectBoxes: {},
      houseRaidedMarkers: {},
    };

    this.setupPawns(gamedatas);
    this.setupSelectBoxes();
    this.setupGossipPile(gamedatas);
    this.setupHouseRaidedMarkers();
  }

  private setupGossipPile(gamedatas: GamedatasAlias) {
    this.gossipPile = new Deck<ViceCard>(
      this.game.viceCardManager,
      this.ui.containers.gossipPile,
      {
        cardNumber: gamedatas.gossipPileCount,
        // thicknesses: [0, 2, 5, 10, 20, 30],
        thicknesses: [100],
        counter: {
          show: true,
          position: 'center'
        }
      }
    );
  }

  private setupHouseRaidedMarkers() {
    MOLLY_HOUSES.forEach((house) => {
      const elt = (this.ui.houseRaidedMarkers[house] =
        document.createElement('div'));
      elt.classList.add('moho-house-raided-marker');
      elt.setAttribute('data-house', house);
      elt.setAttribute('data-raided', 'false');
      this.ui.containers.houseRaidedMarkers.appendChild(elt);
    });
  }

  private setupPawns(gamedatas: GamedatasAlias) {
    ['joy', 'week'].forEach((pawn) => {
      const elt = (this.ui.containers.pawns[pawn] =
        document.createElement('div'));
      elt.id = pawn;
      elt.classList.add('moho-pawn');
      elt.setAttribute('data-type', pawn);
      this.ui.containers.board.appendChild(elt);
    });

    this.updatePawns(gamedatas);
  }

  private setupSelectBoxes() {}

  // .##.....##.########..########.....###....########.########....##.....##.####
  // .##.....##.##.....##.##.....##...##.##......##....##..........##.....##..##.
  // .##.....##.##.....##.##.....##..##...##.....##....##..........##.....##..##.
  // .##.....##.########..##.....##.##.....##....##....######......##.....##..##.
  // .##.....##.##........##.....##.#########....##....##..........##.....##..##.
  // .##.....##.##........##.....##.##.....##....##....##..........##.....##..##.
  // ..#######..##........########..##.....##....##....########.....#######..####

  async movePawn(
    type: keyof typeof this.ui.containers.pawns,
    value: string | number
  ) {
    const fromRect = this.ui.containers.pawns[type].getBoundingClientRect();
    this.updatePawn(type, value);
    await this.game.animationManager.play(
      new BgaSlideAnimation({
        element: this.ui.containers.pawns[type],
        transitionTimingFunction: 'ease-in-out',
        fromRect,
      })
    );
  }

  updatePawn(
    type: keyof typeof this.ui.containers.pawns,
    value: string | number
  ) {
    let position: AbsolutePosition;
    switch (type) {
      case 'week':
        // position = getConfig(value as number);
        break;
      case 'joy':
        // position = getConfig(value as number);
        break;
    }
    setAbsolutePosition(this.ui.containers.pawns[type], BOARD_SCALE, position);
  }

  updatePawns(gamedatas: GamedatasAlias) {
    // const { balance, debt, standing } = gamedatas.company;
    // this.updatePawn('balance', balance);
    // this.updatePawn('debt', debt);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...
}
