interface OnEnteringExamineGossipPileArgs extends CommonStateArgs {
  _private: ViceCardBase[];
}

class ExamineGossipPile implements State {
  private static instance: ExamineGossipPile;
  private args: OnEnteringExamineGossipPileArgs;
  private modal: CardModal;

  constructor(private game: GameAlias) {
    this.modal = new CardModal(game, GOSSIP_PILE);
  }

  public static create(game: GameAlias) {
    ExamineGossipPile.instance = new ExamineGossipPile(game);
  }

  public static getInstance() {
    return ExamineGossipPile.instance;
  }

  onEnteringState(args: OnEnteringExamineGossipPileArgs) {
    debug('Entering ExamineGossipPile state');
    this.args = args;
    this.modal.addCards(Object.values(this.args._private));

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving ExamineGossipPile state');
    this.modal.removeCards();
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringExamineGossipPileArgs
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

    updatePageTitle(
      _('${you} may add a card from the gossip pile to your hand'),
      {}
    );

    addPrimaryActionButton({
      id: 'open_btn',
      text: _('Show Gossip Pile'),
      callback: () => {
        this.modal.open();
      },
    });

    Object.values(this.args._private).forEach((card) => {
      onClick(card.id, () => {
        this.updateInterfaceConfirm(card);
        this.modal.close();
      });
    });
    this.modal.open();
  }

  private updateInterfaceConfirm(card: ViceCardBase) {
    clearPossible();

    const viceCard = getViceCard(card);
    updatePageTitle(_('Add ${value} of ${tkn_suit} to your hand?'), {
      value: getViceCardValueText(viceCard.displayValue),
      tkn_suit: viceCard.suit,
    });

    addConfirmButton(() => {
      performAction('actExamineGossipPile', {
        cardId: card.id
      });
      this.modal.removeCards();
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
