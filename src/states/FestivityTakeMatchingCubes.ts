interface OnEnteringFestivityTakeMatchingCubesArgs extends CommonStateArgs {
  number: number;
  suit: Suit;
}

class FestivityTakeMatchingCubes implements State {
  private static instance: FestivityTakeMatchingCubes;
  private args: OnEnteringFestivityTakeMatchingCubesArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    FestivityTakeMatchingCubes.instance = new FestivityTakeMatchingCubes(game);
  }

  public static getInstance() {
    return FestivityTakeMatchingCubes.instance;
  }

  onEnteringState(args: OnEnteringFestivityTakeMatchingCubesArgs) {
    debug('Entering FestivityTakeMatchingCubes state');
    this.args = args;
    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving FestivityTakeMatchingCubes state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringFestivityTakeMatchingCubesArgs
  ) {}

  //  .####.##....##.########.########.########..########....###.....######..########
  //  ..##..###...##....##....##.......##.....##.##.........##.##...##....##.##......
  //  ..##..####..##....##....##.......##.....##.##........##...##..##.......##......
  //  ..##..##.##.##....##....######...########..######...##.....##.##.......######..
  //  ..##..##..####....##....##.......##...##...##.......#########.##.......##......
  //  ..##..##...###....##....##.......##....##..##.......##.....##.##....##.##......
  //  .####.##....##....##....########.##.....##.##.......##.....##..######..########

  // ..######..########.########.########...######.
  // .##....##....##....##.......##.....##.##....##
  // .##..........##....##.......##.....##.##......
  // ..######.....##....######...########...######.
  // .......##....##....##.......##..............##
  // .##....##....##....##.......##........##....##
  // ..######.....##....########.##.........######.

  private updateInterfaceInitialStep() {
    this.game.clearPossible();
    updatePageTitle(_('${you} may take ${number} ${tkn_cube}'), {
      number: this.args.number,
      tkn_cube: SUIT_COLOR_MAP[this.args.suit],
    });

    addPrimaryActionButton({
      id: 'take_cubes_btn',
      text: _('Take'),
      callback: () => {
        performAction('actFestivityTakeMatchingCubes', {
          takeCubes: true,
        });
      },
    });
    addSecondaryActionButton({
      id: 'do_not_take_cubes_btn',
      text: _('Do not take'),
      callback: () => {
        performAction('actFestivityTakeMatchingCubes', {
          takeCubes: false,
        });
      },
    });
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  //  ..######..##.......####..######..##....##
  //  .##....##.##........##..##....##.##...##.
  //  .##.......##........##..##.......##..##..
  //  .##.......##........##..##.......#####...
  //  .##.......##........##..##.......##..##..
  //  .##....##.##........##..##....##.##...##.
  //  ..######..########.####..######..##....##

  // .##.....##....###....##....##.########..##.......########..######.
  // .##.....##...##.##...###...##.##.....##.##.......##.......##....##
  // .##.....##..##...##..####..##.##.....##.##.......##.......##......
  // .#########.##.....##.##.##.##.##.....##.##.......######....######.
  // .##.....##.#########.##..####.##.....##.##.......##.............##
  // .##.....##.##.....##.##...###.##.....##.##.......##.......##....##
  // .##.....##.##.....##.##....##.########..########.########..######.
}
