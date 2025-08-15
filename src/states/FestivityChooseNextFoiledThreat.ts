interface OnEnteringFestivityChooseNextFoiledThreatArgs
  extends CommonStateArgs {
  cards: ViceCardBase[];
}

class FestivityChooseNextFoiledThreat implements State {
  private static instance: FestivityChooseNextFoiledThreat;
  private args: OnEnteringFestivityChooseNextFoiledThreatArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    FestivityChooseNextFoiledThreat.instance =
      new FestivityChooseNextFoiledThreat(game);
  }

  public static getInstance() {
    return FestivityChooseNextFoiledThreat.instance;
  }

  onEnteringState(args: OnEnteringFestivityChooseNextFoiledThreatArgs) {
    debug('Entering FestivityChooseNextFoiledThreat state');
    this.args = args;
    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving Indulge state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringFestivityChooseNextFoiledThreatArgs
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
    updatePageTitle(_('${you} must choose the next threat to foil'), {});

    this.args.cards.forEach((card) => {
      onClick(card.id, () => {
        this.updateInterfaceConfirm(card);
      });
    });

    addUndoButtons(this.args);
  }

  private updateInterfaceConfirm(card: ViceCardBase) {
    clearPossible();

    const { displayValue, suit } = getViceCard(card);
    updatePageTitle(_('Choose ${value} of ${tkn_suit} as the next threat to foil?'), {
      value: getViceCardValueText(displayValue),
      tkn_suit: suit,
    });

    addConfirmButton(() => {
      performAction('actFestivityChooseNextFoiledThreat', {
        cardId: card.id,
      });
    });
    addCancelButton();
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
