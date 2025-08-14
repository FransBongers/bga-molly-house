interface OnEnteringFestivityGenerateGossipArgs extends CommonStateArgs {
  cards: ViceCardBase[];
}

class FestivityGenerateGossip implements State {
  private static instance: FestivityGenerateGossip;
  private args: OnEnteringFestivityGenerateGossipArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    FestivityGenerateGossip.instance = new FestivityGenerateGossip(game);
  }

  public static getInstance() {
    return FestivityGenerateGossip.instance;
  }

  onEnteringState(args: OnEnteringFestivityGenerateGossipArgs) {
    debug('Entering FestivityGenerateGossip state');
    this.args = args;
    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving Indulge state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringFestivityGenerateGossipArgs
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
    updatePageTitle(_('${you} add cards to the gossip pile, one at a time'));

    this.args.cards.forEach((card) => {
      onClick(card.id, () => {
        this.updateInterfaceConfirm(card);
      });
    });
  }

  private updateInterfaceConfirm(card: ViceCardBase) {
    clearPossible();

    const viceCard = getViceCard(card);
    updatePageTitle(_('Add ${value} of ${tkn_suit} to the gossip pile?'), {
      value: getViceCardValueText(viceCard.displayValue),
      tkn_suit: viceCard.suit,
    });
    setSelected(card.id);

    addConfirmButton(() => {
      performAction('actFestivityGenerateGossip', {
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
