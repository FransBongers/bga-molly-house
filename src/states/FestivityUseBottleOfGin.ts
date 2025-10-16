interface OnEnteringFestivityUseBottleOfGinArgs extends CommonStateArgs {
  currentWinningCards: {
    ranking: string;
    cards: ViceCardBase[];
  };
}

class FestivityUseBottleOfGin implements State {
  private static instance: FestivityUseBottleOfGin;
  private args: OnEnteringFestivityUseBottleOfGinArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    FestivityUseBottleOfGin.instance = new FestivityUseBottleOfGin(game);
  }

  public static getInstance() {
    return FestivityUseBottleOfGin.instance;
  }

  onEnteringState(args: OnEnteringFestivityUseBottleOfGinArgs) {
    debug('Entering FestivityUseBottleOfGin state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving FestivityUseBottleOfGin state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringFestivityUseBottleOfGinArgs
  ) {
    this.args = args;
    this.highlightWinningCards();
  }

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

    updatePageTitle(
      _('${you} may use Bottle of Gin to play an additional round'),
      {}
    );
    this.highlightWinningCards();

    addPrimaryActionButton({
      id: 'use_btn',
      text: _('Use Bottle of Gin'),
      callback: () => {
        performAction('actFestivityUseBottleOfGin', {
          useBottleOfGin: true,
        });
      },
    });

    addSecondaryActionButton({
      id: 'do_not_use_btn',
      text: _('Do not use Bottle of Gin'),
      callback: () => {
        performAction('actFestivityUseBottleOfGin', {
          useBottleOfGin: false,
        });
      },
    });
  }

  private updateInterfaceConfirm() {
    clearPossible();

    updatePageTitle(_('Confirm action'));

    addConfirmButton(() => {
      performAction('actFestivityUseBottleOfGin', {});
    });
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  highlightWinningCards() {
    this.args.currentWinningCards.cards.forEach((card) => setSelected(card.id));
  }

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
