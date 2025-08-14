interface OnEnteringFestivityPlayCardArgs extends CommonStateArgs {
  _private: ViceCardBase[];
}

class FestivityPlayCard implements State {
  private static instance: FestivityPlayCard;
  private args: OnEnteringFestivityPlayCardArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    FestivityPlayCard.instance = new FestivityPlayCard(game);
  }

  public static getInstance() {
    return FestivityPlayCard.instance;
  }

  onEnteringState(args: OnEnteringFestivityPlayCardArgs) {
    debug('Entering FestivityPlayCard state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving Indulge state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringFestivityPlayCardArgs
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

    if (this.args.optionalAction) {
      updatePageTitle(_('${you} may play a card or pass'), {});
    } else {
      updatePageTitle(_('${you} must play a card'), {});
    }

    this.args._private.forEach((card) => {
      onClick(card.id, () => {
        this.updateInterfaceConfirm(card);
      });
    });

    addPassButton(this.args.optionalAction);
  }

  private updateInterfaceConfirm(card: ViceCardBase) {
    clearPossible();

    setSelected(card.id);

    const { displayValue, suit } = getViceCard(card);

    updatePageTitle(_('Play ${value} of ${tkn_suit}?'), {
      value: getViceCardValueText(displayValue),
      tkn_suit: suit,
    });

    addConfirmButton(() => {
      performAction('actFestivityPlayCard', {
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
