interface SetChoice {
  value: number | 'Q' | 'J';
  numberToSelect: number;
  cards: ViceCardBase[];
}

interface SetOpions {
  selected: ViceCardBase[];
  choices: Array<SetChoice>;
}

interface OnEnteringFestivitySelectWinningSetArgs extends CommonStateArgs {
  ranking: string;
  options: SetOpions[];
}

class FestivitySelectWinningSet implements State {
  private static instance: FestivitySelectWinningSet;
  private args: OnEnteringFestivitySelectWinningSetArgs;
  private selectedSet: number;
  private selectedCards: Record<string | number, Record<string, ViceCardBase>> =
    {};

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    FestivitySelectWinningSet.instance = new FestivitySelectWinningSet(game);
  }

  public static getInstance() {
    return FestivitySelectWinningSet.instance;
  }

  onEnteringState(args: OnEnteringFestivitySelectWinningSetArgs) {
    debug('Entering FestivitySelectWinningSet state');
    this.args = args;
    this.selectedSet = null;
    this.selectedCards = {};
    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving Indulge state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringFestivitySelectWinningSetArgs
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
    if (this.args.options.length === 1) {
      this.selectedSet = 0;
      this.args.options[0].choices.forEach(({ value }) => {
        this.selectedCards[value] = {};
      });
      this.updateInterfaceSelectCardsInSet();
      return;
    }

    // const remaining =
    //   this.args.numberToSelect - Object.keys(this.selectedCards).length;
    // if (remaining === 0) {
    //   this.updateInterfaceConfirm();
    //   return;
    // }

    // updatePageTitle(
    //   _('${you} must select the winning set (${number} remaining)'),
    //   {
    //     number: remaining,
    //   }
    // );
    // this.args.cards.forEach((card) => {
    //   const cardElt = document.getElementById(card.id);
    //   if (cardElt) {
    //     onClick(cardElt, () => this.onClickCard(card));
    //   }
    // });

    // this.setSelected();

    // if (Object.keys(this.selectedCards).length > 0) {
    //   addCancelButton();
    // } else {
    //   addUndoButtons(this.args);
    // }
  }

  private updateInterfaceSelectCardsInSet() {
    this.game.clearPossible();
    const set = this.args.options[this.selectedSet];

    let remaining = 0;
    let cardsAlreadySelected = 0;
    set.choices.forEach(({ value, numberToSelect, cards }) => {
      const numberSelected = Object.keys(this.selectedCards[value]).length;
      cardsAlreadySelected += numberSelected;
      if (numberSelected < numberToSelect) {
        remaining += numberToSelect - numberSelected;
        cards.forEach((card) => {
          onClick(document.getElementById(card.id), () => {
            this.onClickCard(card, value);
          });
        });
      }
    });

    if (remaining === 0) {
      this.updateInterfaceConfirm();
      return;
    }

    this.setSelected(set.selected.concat(this.getSelectedCardsFromOptions()));

    updatePageTitle(
      _(
        '${you} must select cards for the winning ${festivityName} (${number} remaining)'
      ),
      {
        festivityName: getFestivityRankingName(this.args.ranking),
        number: remaining,
      }
    );

    if (cardsAlreadySelected > 0) {
      addCancelButton();
    }
  }

  private uppdateInterfaceSelectSet(index: 0) {}

  private updateInterfaceConfirm() {
    clearPossible();
    const set = this.args.options[this.selectedSet];

    const winningSet = set.selected
      .concat(this.getSelectedCardsFromOptions())
      .sort((a, b) => {
        const cardA = getViceCard(a);
        const cardB = getViceCard(b);
        const valueA = typeof cardA.value === 'string' ? 0 : cardA.value;
        const valueB = typeof cardB.value === 'string' ? 0 : cardB.value;
        return valueA - valueB;
      });

    updatePageTitle(_('Confirm winning ${festivityName}: ${cardsLog}'), {
      cardsLog: cardsLog(winningSet),
      festivityName: getFestivityRankingName(this.args.ranking),
    });

    this.setSelected(winningSet);

    addConfirmButton(() => {
      const selectedCards = {};
      Object.entries(this.selectedCards).forEach(([value, cards]) => {
        selectedCards[value] = Object.keys(cards);
      });

      performAction('actFestivitySelectWinningSet', {
        setIndex: this.selectedSet,
        selectedCards,
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

  private setSelected(cards: ViceCardBase[] = []) {
    cards.forEach(({ id }) => {
      const cardElt = document.getElementById(id);
      setSelected(cardElt);
    });
  }

  private getSelectedCardsFromOptions(): ViceCardBase[] {
    const selectedCards: ViceCardBase[] = [];
    Object.values(this.selectedCards).forEach((cards) => {
      selectedCards.push(...Object.values(cards));
    });
    return selectedCards;
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

  private onClickCard(card: ViceCardBase, value: number | 'Q' | 'J') {
    if (this.selectedCards[value][card.id]) {
      delete this.selectedCards[value][card.id];
    } else {
      this.selectedCards[value][card.id] = card;
    }

    this.updateInterfaceSelectCardsInSet();
  }
}
