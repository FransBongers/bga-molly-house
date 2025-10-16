interface OnEnteringFestivityPlayCardArgs extends CommonStateArgs {
  _private: ViceCardBase[];
  hasViolin: boolean;
  currentWinningCards: {
    ranking: string;
    cards: ViceCardBase[];
  }
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
    debug('Leaving FestivityPlayCard state');
  }

  setDescription(
    activePlayerId: number,
    args: OnEnteringFestivityPlayCardArgs
  ) {
    this.args = args;
    if (args.optionalAction) {
      this.game.clientUpdatePageTitle({
        text: _('${tkn_playerName} may play a card'),
        args: {
          tkn_playerName: PlayerManager.getInstance()
            .getPlayer(activePlayerId)
            .getName(),
        },
        nonActivePlayers: true,
      });
    }
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

    this.updatePageTitle();
    this.highlightWinningCards();

    this.args._private.forEach((card) => {
      onClick(card.id, () => {
        if (getViceCard(card).displayValue === 'R') {
          this.updateInterfaceSelectRogueValue(card);
        } else {
          this.updateInterfaceConfirm(card);
        }
      });
    });

    if (this.args.hasViolin) {
      addPrimaryActionButton({
        id: 'play-violin',
        text: _('Play Violin'),
        callback: () => {
          performAction('actFestivityPlayCard', {
            cardId: null,
            valueForRogue: 0,
            playViolin: true,
          });
        },
      });
    }

    addPassButton(this.args.optionalAction);
  }

  private updateInterfaceSelectRogueValue(card: ViceCardBase) {
    clearPossible();
    setSelected(card.id);
    this.highlightWinningCards();

    const { displayValue, suit } = getViceCard(card);

    updatePageTitle(
      _('${you} must select a value for ${value} of ${tkn_suit}'),
      {
        value: getViceCardValueText(displayValue),
        tkn_suit: suit,
      }
    );
    for (let i = 0; i <= 9; i++) {
      addPrimaryActionButton({
        id: `rogue-value-${i}`,
        text: i.toString(),
        callback: () => {
          this.updateInterfaceConfirm(card, i);
        },
      });
    }

    addCancelButton();
  }

  private updateInterfaceConfirm(
    card: ViceCardBase,
    valueForRogue: number = 0
  ) {
    clearPossible();

    setSelected(card.id);
    this.highlightWinningCards();
    
    const { displayValue, suit } = getViceCard(card);

    const text =
      displayValue === 'R'
        ? _('Play ${value} of ${tkn_suit} as ${valueForRogue} ?')
        : _('Play ${value} of ${tkn_suit} ?');
    updatePageTitle(text, {
      value: getViceCardValueText(displayValue),
      tkn_suit: suit,
      valueForRogue,
    });

    addConfirmButton(() => {
      performAction('actFestivityPlayCard', {
        cardId: card.id,
        valueForRogue,
        playViolin: false,
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

  updatePageTitle() {
    if (this.args.optionalAction && this.args.hasViolin) {
      updatePageTitle(_('${you} may play a card, play the Violin or pass'), {});
    } else if (this.args.optionalAction) {
      updatePageTitle(_('${you} may play a card or pass'), {});
    } else if (this.args.hasViolin) {
      updatePageTitle(_('${you} must play a card or may play the Violin'), {});
    } else {
      updatePageTitle(_('${you} must play a card'), {});
    }
  }

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
