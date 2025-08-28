class Board {
  private static instance: Board;
  private game: GameAlias;

  public diceStock: LineDiceStock;
  public gossipPile: LineStock<ViceCard>;
  public counters: Record<string, Counter> = {};
  public evidenceCounters: Record<string, CubeCounter> = {};

  public ui: {
    containers: {
      board: HTMLElement;
      dangerousCruisingMarkers: HTMLElement;
      evidenceCounters: HTMLElement;
      gossipPile: HTMLElement;
      houseRaidedMarkers: HTMLElement;
      markers: HTMLElement;
      pawns: HTMLElement;
      tokens: {
        joy?: HTMLElement;
        week?: HTMLElement;
      };
      selectBoxes: HTMLElement;
    };
    diceStock: HTMLElement;
    dangerousCruisingMarkers: Record<string, HTMLElement>;
    houseRaidedMarkers: Record<string, HTMLElement>;
    markers: Record<string, HTMLElement>;
    pawns: Record<string, HTMLElement>;
    selectBoxes: Record<string, HTMLElement>;
  };
  public sites: Record<string, MohoPawn[]> = {};

  public joyMarkerStocks: Record<number, LineStock<MohoJoyMarker>> = {};

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
        dangerousCruisingMarkers: document.getElementById(
          'moho-dangerous-cruising-markers'
        ),
        evidenceCounters: document.getElementById('moho-evidence-counters'),
        gossipPile: document.getElementById('moho-gossip-pile'),
        markers: document.getElementById('moho-markers'),
        pawns: document.getElementById('moho-pawns'),
        tokens: {},
        selectBoxes: document.getElementById('moho-select-boxes'),
        houseRaidedMarkers: document.getElementById('house-raided-markers'),
      },
      dangerousCruisingMarkers: {},
      diceStock: document.getElementById('moho-dice-stock'),
      houseRaidedMarkers: {},
      markers: {},
      pawns: {},
      selectBoxes: {},
    };

    this.setupDangerousCruisingMarkers(gamedatas);
    this.setupEvidenceCounters(gamedatas);
    this.setupGossipPile(gamedatas);
    this.setupHouseRaidedMarkers(gamedatas);
    this.setupWeekMarker(gamedatas);
    this.setupJoyMarkers(gamedatas);
    this.setupDiceStock(gamedatas);
    this.setupSelectBoxes();
    this.setupSites();
    // Needs to happen aftert setupSites, as it uses the sites
    this.setupPawns(gamedatas);
    // this.setupTokens(gamedatas);
    this.setFestivityActive(gamedatas.festivity.active);
  }

  private setupDangerousCruisingMarkers(gamedatas: GamedatasAlias) {
    Object.entries(CRUISING_SITES).forEach(([siteId, sideOfBoard]) => {
      const elt = (this.ui.dangerousCruisingMarkers[siteId] =
        document.createElement('div'));
      elt.classList.add('moho-dangerous-cruising-marker');
      elt.setAttribute('data-site', siteId);
      elt.setAttribute('data-dangerous', 'false');
      elt.setAttribute('data-side-of-board', sideOfBoard);
      setAbsolutePosition(
        elt,
        BOARD_SCALE,
        DANGEROUS_CRUISING_MARKERS_POSITIONS[siteId]
      );
      this.ui.containers.dangerousCruisingMarkers.appendChild(elt);
    });

    this.updateDangeousCruisingMarkers(gamedatas);
  }

  private setupDiceStock(gamedatas: GamedatasAlias) {
    this.diceStock = new LineDiceStock(
      this.game.diceManager,
      this.ui.diceStock,
      { gap: 'calc(var(--boardScale) * 32px)' }
    );
    this.ui.diceStock.dataset.place = `${1}`;

    this.diceStock.addDice(getDice(gamedatas.dice));
  }

  private setupEvidenceCounters(gamedatas: GamedatasAlias) {
    MOLLY_HOUSES.forEach((siteId) => {
      this.evidenceCounters[siteId] = new CubeCounter({
        id: `cubes-${siteId}`,
        initialValue: gamedatas.sites[siteId].evidence,
        parentElement: this.ui.containers.evidenceCounters,
        color: SUIT_COLOR_MAP[
          StaticData.get().site(siteId).suit
        ] as CubeCounterProps['color'],
        type: 'overlap',
      });
    });

    this.updateEvidenceCounters(gamedatas);
  }

  private setupGossipPile(gamedatas: GamedatasAlias) {
    this.gossipPile = new LineStock<ViceCard>(
      this.game.viceCardManager,
      this.ui.containers.gossipPile
    );
    this.counters[GOSSIP_PILE] = new ebg.counter();
    this.counters[GOSSIP_PILE].create('moho-gossip-pile-counter');
    this.updateGossipPile(gamedatas);
  }

  private setupHouseRaidedMarkers(gamedatas: GamedatasAlias) {
    MOLLY_HOUSES.forEach((house) => {
      const elt = (this.ui.houseRaidedMarkers[house] =
        document.createElement('div'));
      elt.classList.add('moho-house-raided-marker');
      elt.setAttribute('data-house', house);
      elt.setAttribute('data-raided', 'false');
      this.ui.containers.houseRaidedMarkers.appendChild(elt);
    });

    this.updateHouseRaidedMarkers(gamedatas);
  }

  private setupWeekMarker(gamedatas) {
    const elt = (this.ui.markers[CURRENT_WEEK_MARKER] =
      document.createElement('div'));
    elt.id = 'moho-week-marker';
    this.ui.containers.markers.appendChild(elt);

    this.updateWeekMarker(gamedatas);
  }

  private setupJoyMarkers(gamedatas: GamedatasAlias) {
    for (let i = 0; i <= 39; i++) {
      const elt = document.createElement('div');
      elt.classList.add('moho-joy-marker-stock');
      setAbsolutePosition(elt, BOARD_SCALE, JOY_MARKER_POSITIONS[i]);
      this.ui.containers.markers.appendChild(elt);
      this.joyMarkerStocks[i] = new LineStock<MohoJoyMarker>(
        this.game.joyMarkerManager,
        elt,
        {
          gap: '0',
          direction: 'row',
        }
      );
    }
    this.updateJoyMarkers(gamedatas);
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

  // private setupTokens(gamedatas: GamedatasAlias) {
  //   ['joy', 'week'].forEach((pawn) => {
  //     const elt = (this.ui.containers.pawns[pawn] =
  //       document.createElement('div'));
  //     elt.id = pawn;
  //     elt.classList.add('moho-token');
  //     elt.setAttribute('data-type', pawn);
  //     this.ui.containers.board.appendChild(elt);
  //   });

  //   // this.updateTokens(gamedatas);
  // }

  private setupSites() {
    SITES.forEach((site) => {
      this.sites[site] = [];
    });
  }

  private setupSelectBoxes() {
    SITES.forEach((site) => {
      const elt = (this.ui.selectBoxes[site] = document.createElement('div'));
      elt.classList.add('moho-select-box');
      elt.classList.add('moho-select-site');
      elt.setAttribute('data-site', site);
      const sitePosition = SITE_SELECT_POSITIONS[site];
      setAbsolutePosition(elt, BOARD_SCALE, SITE_SELECT_POSITIONS[site]);
      setCalculatedValue({
        elt,
        scaleVarName: BOARD_SCALE,
        value: sitePosition.width,
        property: 'width',
      });
      setCalculatedValue({
        elt,
        scaleVarName: BOARD_SCALE,
        value: sitePosition.height,
        property: 'height',
      });
      this.ui.containers.selectBoxes.appendChild(elt);
    });
  }

  // .##.....##.########..########.....###....########.########....##.....##.####
  // .##.....##.##.....##.##.....##...##.##......##....##..........##.....##..##.
  // .##.....##.##.....##.##.....##..##...##.....##....##..........##.....##..##.
  // .##.....##.########..##.....##.##.....##....##....######......##.....##..##.
  // .##.....##.##........##.....##.#########....##....##..........##.....##..##.
  // .##.....##.##........##.....##.##.....##....##....##..........##.....##..##.
  // ..#######..##........########..##.....##....##....########.....#######..####

  setFestivityActive(active: boolean) {
    this.ui.diceStock.dataset.festivity = active ? 'true' : 'false';
  }

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

  updateDangeousCruisingMarkers(gamedatas: GamedatasAlias) {
    Object.keys(CRUISING_SITES).forEach((siteId) => {
      if (gamedatas.sites[siteId].raidedOrDangerous) {
        this.setCruisingSiteDangerous(siteId);
      }
    });
  }

  updateEvidenceCounters(gamedatas: GamedatasAlias) {}

  updateGossipPile(gamedatas: GamedatasAlias) {
    this.counters[GOSSIP_PILE].setValue(gamedatas.gossipPileCount);
  }

  updateHouseRaidedMarkers(gamedatas: GamedatasAlias) {
    MOLLY_HOUSES.forEach((siteId) => {
      if (gamedatas.sites[siteId].raidedOrDangerous) {
        this.setMollyHouseRaided(siteId);
      }
    });
  }

  updateJoyMarkers(gamedatas: GamedatasAlias) {
    this.joyMarkerStocks[gamedatas.communityJoy].addCard({
      id: COMMUNITY_JOY_MARKER,
      color: COMMUNITY_JOY_MARKER,
      hanged: false,
    });

    Object.values(gamedatas.players).forEach((player) => {
      this.joyMarkerStocks[player.score].addCard({
        id: player.id,
        color: HEX_COLOR_COLOR_MAP[player.color],
        hanged: false,
      });
    });
  }

  updateWeekMarker(gamedatas: GamedatasAlias) {
    const currentWeek = gamedatas.currentWeek;
    setAbsolutePosition(
      this.ui.markers[CURRENT_WEEK_MARKER],
      BOARD_SCALE,
      CURRENT_WEEK_MARKER_POSITIONS[currentWeek]
    );
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

  public async moveWeekMarker(week: number) {
    const fromRect =
      this.ui.markers[CURRENT_WEEK_MARKER].getBoundingClientRect();
    setAbsolutePosition(
      this.ui.markers[CURRENT_WEEK_MARKER],
      BOARD_SCALE,
      CURRENT_WEEK_MARKER_POSITIONS[week]
    );
    await this.game.animationManager.play(
      new BgaSlideAnimation({
        element: this.ui.markers[CURRENT_WEEK_MARKER],
        transitionTimingFunction: 'ease-in-out',
        fromRect,
      })
    );
  }

  public setMollyHouseRaided(mollyHouseId: string) {
    this.ui.houseRaidedMarkers[mollyHouseId].dataset.raided = 'true';
  }

  public setCruisingSiteDangerous(siteId: string) {
    this.ui.dangerousCruisingMarkers[siteId].dataset.dangerous = 'true';
  }

  public pawnAlreadyOnSite(pawnId: string, location: string) {
    return this.sites[location].some(
      (pawn: MohoPawn | null) => pawn?.id === pawnId
    );
  }

  public async placePawn(pawn: MohoPawn, fromElement?: HTMLElement) {
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
