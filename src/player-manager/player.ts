//  .########..##..........###....##....##.########.########.
//  .##.....##.##.........##.##....##..##..##.......##.....##
//  .##.....##.##........##...##....####...##.......##.....##
//  .########..##.......##.....##....##....######...########.
//  .##........##.......#########....##....##.......##...##..
//  .##........##.......##.....##....##....##.......##....##.
//  .##........########.##.....##....##....########.##.....##

class MohoPlayer {
  private playerColor: string;
  protected playerId: number;
  private playerName: string;
  public counters: Record<string, IconCounter> = {};
  public reputation: LineStock<ViceCard>;

  public ui: Record<string, HTMLElement> = {};

  public items: Record<string, LineStock<MohoItem>> = {};
  public encounterTokens: LineStock<MohoEncounterToken>;
  public indictments: LineStock<MohoIndictment>;

  constructor(private game: GameAlias, player: MollyHousePlayerData) {
    this.game = game;
    const playerId = player.id;
    this.playerId = Number(playerId);
    this.playerName = player.name;
    this.playerColor = player.color;

    const gamedatas = game.gamedatas;

    this.setupPlayer(gamedatas);
  }

  // .##.....##.##....##.########...#######.
  // .##.....##.###...##.##.....##.##.....##
  // .##.....##.####..##.##.....##.##.....##
  // .##.....##.##.##.##.##.....##.##.....##
  // .##.....##.##..####.##.....##.##.....##
  // .##.....##.##...###.##.....##.##.....##
  // ..#######..##....##.########...#######.

  clearInterface() {}

  updateInterface(gamedatas: GamedatasAlias) {
    this.updatePlayerPanel(gamedatas);
    this.updatePlayerBoard(gamedatas.players[this.playerId]);
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  // Setup functions
  public setupPlayer(gamedatas: GamedatasAlias) {
    this.setupPlayerBoard(gamedatas);
    this.setupPlayerPanel(gamedatas);
  }

  setupPlayerBoard(gamedatas: GamedatasAlias) {
    const playerGamedatas = gamedatas.players[this.playerId];

    const node = document.getElementById('right-column');

    if (!node) {
      return;
    }

    node.insertAdjacentHTML(
      'beforeend',
      tplPlayerBoard({
        color: HEX_COLOR_COLOR_MAP[this.playerColor],
        playerId: this.playerId,
      })
    );

    this.reputation = new LineStock<ViceCard>(
      this.game.viceCardManager,
      document.getElementById(`moho-reputation-${this.playerId}`),
      {
        gap: '0px',
      }
    );

    [1, 2].forEach((value) => {
      this.items[`item_${value}_${this.playerId}`] = new LineStock<MohoItem>(
        this.game.itemManager,
        document.getElementById(`item_${value}_${this.playerId}`),
        {
          gap: '0px',
        }
      );
    });

    [YELLOW, GREEN, BLUE, RED].forEach((color) => {
      this.counters[`playerBoard_${color}`] = new CubeCounter({
        id: `player-board-cubes-${color}-${this.playerId}`,
        initialValue: playerGamedatas.cubes[COLOR_SUIT_MAP[color]],
        parentElement: document.getElementById(
          `moho-player-board-counters-${this.playerId}`
        ),
        color: color as CubeCounterProps['color'],
        type: 'overlap',
      });
    });

    this.setupEncounterTokens(gamedatas);
    this.setupIndictments(gamedatas);

    this.updatePlayerBoard(playerGamedatas);
    this.updatePrivateData(playerGamedatas);
  }

  setupEncounterTokens(gamedatas: GamedatasAlias) {
    this.encounterTokens = new LineStock<MohoEncounterToken>(
      this.game.encounterTokenManager,
      document.getElementById(`moho-encounter-tokens-${this.playerId}`),
      {
        gap: '0px',
      }
    );
  }

  setupIndictments(gamedatas: GamedatasAlias) {
    this.indictments = new LineStock<MohoIndictment>(
      this.game.indictmentManager,
      document.getElementById(`moho-indictments-${this.playerId}`),
      {
        gap: '0px',
      }
    );
  }

  setupPlayerPanel(gamedatas: GamedatasAlias) {
    const playerGamedatas = gamedatas.players[this.playerId];

    const node: HTMLElement = document.querySelector(
      `#player_board_${this.playerId} .player-board-game-specific-content`
    );

    if (!node) {
      return;
    }

    // console.log('CubeCounter red');
    // this.cubeCounters[RED] = new IconCounter({
    //   id: `cubes-${this.playerId}`,
    //   initialValue: 1,
    //   parentElement: node,
    //   // color: YELLOW,
    // });

    [PENTACLES, FANS, CUPS, HEARTS].forEach((suit) => {
      this.counters[suit] = new SuitCounter({
        id: `cards-${suit}-${this.playerId}`,
        initialValue: playerGamedatas.reputation.filter(
          (card) => getViceCard(card).suit === suit && !card.hidden
        ).length,
        parentElement: node,
        suit: suit as Suit,
        type: 'overlap',
      });
    });
    this.counters[HAND] = new HandCounter({
      id: `hand-${this.playerId}`,
      initialValue: playerGamedatas.handCardCount,
      parentElement: node,
      type: 'overlap',
    });
    [YELLOW, GREEN, BLUE, RED].forEach((color) => {
      this.counters[color] = new CubeCounter({
        id: `cubes-${color}-${this.playerId}`,
        initialValue: playerGamedatas.cubes[COLOR_SUIT_MAP[color]],
        parentElement: node,
        color: color as CubeCounterProps['color'],
        type: 'overlap',
      });
    });
    this.counters[DRAW_TOKEN] = new DrawTokenCounter({
      id: `draw-tokens-${this.playerId}`,
      initialValue: playerGamedatas.drawTokens,
      parentElement: node,
      type: 'overlap',
    });

    // this.updatePlayerPanel(gamedatas);
  }

  updatePlayerBoard(playerGamedatas: PlayerDataAlias) {
    this.reputation.addCards(playerGamedatas.reputation.map(getViceCard));
    playerGamedatas.items.forEach((item) => {
      this.items[item.location].addCard(getItem(item));
    });
    [YELLOW, GREEN, BLUE, RED].forEach((color) => {
      this.counters[`playerBoard_${color}`].setValue(
        playerGamedatas.cubes[COLOR_SUIT_MAP[color]]
      );
    });
  }

  updatePrivateData(playerGamedatas: PlayerDataAlias) {
    this.indictments.addCards(playerGamedatas.indictments);
    this.updateEncounterTokens(playerGamedatas);
  }

  public updateEncounterTokens(playerGamedatas: PlayerDataAlias) {
    this.encounterTokens.addCards(playerGamedatas.encounterTokens);
  }

  updatePlayerPanel(gamedatas: GamedatasAlias) {
    const playerGamedatas = gamedatas.players[this.playerId];
    [PENTACLES, FANS, CUPS, HEARTS].forEach((suit) => {
      this.counters[suit].setValue(
        playerGamedatas.reputation.filter(
          (card) => getViceCard(card).suit === suit && !card.hidden
        ).length
      );
    });
    this.counters[HAND].setValue(playerGamedatas.handCardCount);

    [YELLOW, GREEN, BLUE, RED].forEach((color) => {
      this.counters[color].setValue(
        playerGamedatas.cubes[COLOR_SUIT_MAP[color]]
      );
    });
    this.counters[DRAW_TOKEN].setValue(playerGamedatas.drawTokens);
  }

  // ..######...########.########.########.########.########...######.
  // .##....##..##..........##.......##....##.......##.....##.##....##
  // .##........##..........##.......##....##.......##.....##.##......
  // .##...####.######......##.......##....######...########...######.
  // .##....##..##..........##.......##....##.......##...##.........##
  // .##....##..##..........##.......##....##.......##....##..##....##
  // ..######...########....##.......##....########.##.....##..######.

  // ..######..########.########.########.########.########...######.
  // .##....##.##..........##.......##....##.......##.....##.##....##
  // .##.......##..........##.......##....##.......##.....##.##......
  // ..######..######......##.......##....######...########...######.
  // .......##.##..........##.......##....##.......##...##.........##
  // .##....##.##..........##.......##....##.......##....##..##....##
  // ..######..########....##.......##....########.##.....##..######.

  getColor(): string {
    return this.playerColor;
  }

  getName(): string {
    return this.playerName;
  }

  getPlayerId(): number {
    return this.playerId;
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  // ....###.....######..########.####..#######..##....##..######.
  // ...##.##...##....##....##.....##..##.....##.###...##.##....##
  // ..##...##..##..........##.....##..##.....##.####..##.##......
  // .##.....##.##..........##.....##..##.....##.##.##.##..######.
  // .#########.##..........##.....##..##.....##.##..####.......##
  // .##.....##.##....##....##.....##..##.....##.##...###.##....##
  // .##.....##..######.....##....####..#######..##....##..######.
}
