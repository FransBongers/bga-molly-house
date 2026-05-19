interface OnEnteringUseDominoArgs extends CommonStateArgs {
  cardId: string;
  itemId: string;
  options: ViceCardBase[];
}

class UseDomino implements State {
  private static instance: UseDomino;
  private args!: OnEnteringUseDominoArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    UseDomino.instance = new UseDomino(game);
  }

  public static getInstance() {
    return UseDomino.instance;
  }

  onEnteringState(args: OnEnteringUseDominoArgs) {
    debug('Entering UseDomino state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving UseDomino state');
  }

  setDescription(activePlayerIds: number, args: OnEnteringUseDominoArgs) {}

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

    const card = StaticData.get().viceCard(this.args.cardId);

    updatePageTitle(
      _('${you} must select a card to swap with ${cardValue} of ${tkn_suit}'),
      {
        cardValue: card.displayValue,
        tkn_suit: card.suit,
      },
    );

    setSelected(this.args.cardId);

    this.args.options.forEach((option) =>
      onClick(option.id, () =>
        performAction('actUseDomino', { cardId: option.id }),
      ),
    );

    addPassButton(this.args.optionalAction);
    addUndoButtons(this.args);
  }
}
