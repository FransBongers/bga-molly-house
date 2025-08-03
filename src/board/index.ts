class Board {
  private static instance: Board;
  private game: GameAlias;

  public gossipPile: Deck<ViceCard>;

  public ui: {
    containers: {
      board: HTMLElement;
      gossipPile: HTMLElement;
      houseRaidedMarkers: HTMLElement;
      pawns: HTMLElement;
      tokens: {
        joy?: HTMLElement;
        week?: HTMLElement;
      };
      selectBoxes: HTMLElement;
    };
    houseRaidedMarkers: Record<string, HTMLElement>;
    pawns: Record<string, HTMLElement>;
    selectBoxes: Record<string, HTMLElement>;
  };
  public sites: Record<string, MohoPawn[]> = {};

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
        pawns: document.getElementById('moho-pawns'),
        tokens: {},
        selectBoxes: document.getElementById('moho-select-boxes'),
        houseRaidedMarkers: document.getElementById('house-raided-markers'),
      },
      houseRaidedMarkers: {},
      pawns: {},
      selectBoxes: {},
    };

    this.setupGossipPile(gamedatas);
    this.setupHouseRaidedMarkers();
    
    this.setupSelectBoxes();
    this.setupSites();
    // Needs to happen aftert setupSites, as it uses the sites
    this.setupPawns(gamedatas);
    this.setupTokens(gamedatas);
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
          position: 'center',
        },
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
    const pawns = Object.values(gamedatas.pawns);
    pawns.forEach(({ id, color }) => {
      const elt = (this.ui.pawns[id] = document.createElement('div'));
      elt.classList.add('moho-pawn');
      elt.setAttribute('data-color', color);
    });
    this.updatePawns(pawns);
  }

  private setupTokens(gamedatas: GamedatasAlias) {
    ['joy', 'week'].forEach((pawn) => {
      const elt = (this.ui.containers.pawns[pawn] =
        document.createElement('div'));
      elt.id = pawn;
      elt.classList.add('moho-token');
      elt.setAttribute('data-type', pawn);
      this.ui.containers.board.appendChild(elt);
    });

    // this.updateTokens(gamedatas);
  }

  private setupSites() {
    SITES.forEach((site) => {
      this.sites[site] = [];
    });
  }

  private setupSelectBoxes() {}

  // .##.....##.########..########.....###....########.########....##.....##.####
  // .##.....##.##.....##.##.....##...##.##......##....##..........##.....##..##.
  // .##.....##.##.....##.##.....##..##...##.....##....##..........##.....##..##.
  // .##.....##.########..##.....##.##.....##....##....######......##.....##..##.
  // .##.....##.##........##.....##.#########....##....##..........##.....##..##.
  // .##.....##.##........##.....##.##.....##....##....##..........##.....##..##.
  // ..#######..##........########..##.....##....##....########.....#######..####

  async moveToken(
    type: keyof typeof this.ui.containers.tokens,
    value: string | number
  ) {
    const fromRect = this.ui.containers.tokens[type].getBoundingClientRect();
    this.updateToken(type, value);
    await this.game.animationManager.play(
      new BgaSlideAnimation({
        element: this.ui.containers.pawns[type],
        transitionTimingFunction: 'ease-in-out',
        fromRect,
      })
    );
  }

  public async movePawn({
    pawn,
    index = 0,
    from,
  }: {
    pawn: MohoPawn;
    from?: string;
    index?: number;
  }) {
    await Interaction.use().wait(index * 200);
    const fromRect = this.ui.pawns[pawn.id].getBoundingClientRect();
    const fromIndex = this.sites[from].findIndex(
      (pawnInOldZone: MohoPawn | null) => pawnInOldZone?.id === pawn.id
    );
    this.placePawn(pawn);
    if (fromIndex >= 0) {
      this.sites[from][fromIndex] = null;
    }
    await this.game.animationManager.play(
      new BgaSlideAnimation({
        element: this.ui.pawns[pawn.id],
        transitionTimingFunction: 'ease-in-out',
        fromRect,
      })
    );
  }

  updateToken(
    type: keyof typeof this.ui.containers.tokens,
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

  updatePawns(pawns: MohoPawn[]) {
    pawns.forEach((pawn) => {
      this.placePawn(pawn);
    });
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public pawnAlreadyOnSite(pawnId: string, location: string) {
    return this.sites[location].some(
      (pawn: MohoPawn | null) => pawn?.id === pawnId
    );
  }

  public async placePawn(pawn: MohoPawn, fromElement?: HTMLElement) {
    console.log('Placing pawn', pawn);
    const { id, location } = pawn;
    if (pawn.location === 'supply' || this.pawnAlreadyOnSite(id, location)) {
      return;
    }
    if (!this.ui.pawns[id].parentElement) {
      this.ui.containers.pawns.appendChild(this.ui.pawns[id]);
    }

    const nullIndex = (this.sites[location] as MohoPawn[]).findIndex(
      (pos) => pos === null
    );

    const pawnIndex = nullIndex >= 0 ? nullIndex : this.sites[location].length;

    const position = getPawnPosition(location, pawnIndex);
    this.sites[location][pawnIndex] = pawn;
    setAbsolutePosition(this.ui.pawns[id], BOARD_SCALE, position);

    if (fromElement) {
      await this.game.animationManager.play(
        new BgaSlideAnimation({
          element: this.ui.pawns[id],
          transitionTimingFunction: 'ease-in-out',
          fromRect: fromElement.getBoundingClientRect(),
        })
      );
    }
  }
}
