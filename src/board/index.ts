class Board {
  private static instance: Board;
  private game: GameAlias;

  public ui: {
    containers: {
      board: HTMLElement;
      pawns: {
        joy?: HTMLElement;
        week?: HTMLElement;
      };
      selectBoxes: HTMLElement;
    };
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
      .getElementById('moho-left-column')
      .insertAdjacentHTML('afterbegin', tplBoard(gamedatas));

    this.ui = {
      containers: {
        board: document.getElementById('moho-board'),
        pawns: {},
        selectBoxes: document.getElementById('moho-select-boxes'),
      },
      selectBoxes: {},
    };

    this.setupPawns(gamedatas);
    this.setupSelectBoxes();
  }


  private setupPawns(gamedatas: GamedatasAlias) {
    ['joy', 'week'].forEach((pawn) => {
      const elt = (this.ui.containers.pawns[pawn] =
        document.createElement('div'));
      elt.id = pawn;
      elt.classList.add('moho-pawn');
      elt.setAttribute(
        'data-type',
        pawn
      );
      this.ui.containers.board.appendChild(elt);
    });

    this.updatePawns(gamedatas);
  }


  private setupSelectBoxes() {

  }



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
