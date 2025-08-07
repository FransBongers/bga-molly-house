interface OnEnteringAddExcessCardsToGossipArgs extends CommonStateArgs {
  _private: {
    cards: ViceCardBase[];
  };
  numberToDiscard: number;
}

class AddExcessCardsToGossip implements State {
  private static instance: AddExcessCardsToGossip;
  private args: OnEnteringAddExcessCardsToGossipArgs;
  private selectedCards: Record<string, ViceCardBase>;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    AddExcessCardsToGossip.instance = new AddExcessCardsToGossip(game);
  }

  public static getInstance() {
    return AddExcessCardsToGossip.instance;
  }

  onEnteringState(args: OnEnteringAddExcessCardsToGossipArgs) {
    debug('Entering AddExcessCardsToGossip state');
    this.args = args;
    this.selectedCards = {};
    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving Indulge state');
  }

  setDescription(activePlayerIds: number, args: OnEnteringAddExcessCardsToGossipArgs) {}

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
    const remaining =
      this.args.numberToDiscard - Object.keys(this.selectedCards).length;
    if (remaining === 0) {
      this.updateInterfaceConfirm();
      return;
    }

    updatePageTitle(
      _('${you} must select cards to add to the gossip pile (${number} remaining)'),
      {
        number: remaining,
      }
    );
    this.args._private.cards.forEach((card) => {
      const cardElt = document.getElementById(card.id);
      if (cardElt) {
        onClick(cardElt, () => this.onClickCard(card));
      }
    });

    this.setSelected();

    if (Object.keys(this.selectedCards).length > 0) {
      addCancelButton();
    } else {
      addUndoButtons(this.args);
    }
  }

  private updateInterfaceConfirm() {
    clearPossible();

    updatePageTitle(_('Add selected cards to the gossip pile?'));

    this.setSelected();

    addConfirmButton(() => {
      performAction('actAddExcessCardsToGossip', {
        cardIds: Object.keys(this.selectedCards),
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

  private setSelected() {
    Object.keys(this.selectedCards).forEach((cardId) => {
      const cardElt = document.getElementById(cardId);
      setSelected(cardElt);
    });
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

  private onClickCard(card: ViceCardBase) {
    if (this.selectedCards[card.id]) {
      delete this.selectedCards[card.id];
    } else {
      this.selectedCards[card.id] = card;
    }

    this.updateInterfaceInitialStep();
  }
}
