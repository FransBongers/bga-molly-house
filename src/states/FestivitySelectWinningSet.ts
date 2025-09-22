interface SetChoice {
  value: number | 'Q' | 'J';
  numberToSelect: number;
  cards: ViceCardBase[];
  ranking: string;
}

interface SetOptions {
  ranking: string;
  selected: ViceCardBase[];
  choices: Array<SetChoice>;
  suit: Suit;
}

interface OnEnteringFestivitySelectWinningSetArgs extends CommonStateArgs {
  options: SetOptions[];
  ranking: string;
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

    updatePageTitle(_('${you} must select the winning set'));

    this.args.options.forEach((option, index) => {
      addSecondaryActionButton({
        id: `set_choice_${index}`,
        text:
          option.ranking === SURPRISE_BALL
            ? formatStringRecursive(_('Surprise Ball of  ${tkn_suit}'), {
                tkn_suit: option.suit,
              })
            : _('Surprise Ball with Dress(es)'),
        callback: () => {
          this.selectedSet = index;
          this.updateInterfaceSelectCardsInSet();
        },
      });
    });
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
        return a.festivityValue - b.festivityValue;
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
