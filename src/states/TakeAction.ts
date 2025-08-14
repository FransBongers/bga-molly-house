interface OnEnteringTakeActionArgs extends CommonStateArgs {
  _private: {
    Cruise?: Record<string, ViceCardBase>;
    Indulge: Record<string, ViceCardBase>;
    LieLow: boolean;
    ThrowFestivity?: boolean;
  };
  site: MohoSiteBase;
}

class TakeAction implements State {
  private static instance: TakeAction;
  private args: OnEnteringTakeActionArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    TakeAction.instance = new TakeAction(game);
  }

  public static getInstance() {
    return TakeAction.instance;
  }

  onEnteringState(args: OnEnteringTakeActionArgs) {
    debug('Entering TakeAction state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving TakeAction state');
  }

  setDescription(activePlayerIds: number, args: OnEnteringTakeActionArgs) {}

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

    updatePageTitle(_('${you} must take an action'), {});

    if (this.args._private.LieLow) {
      onClick('moho-deck', () => this.updateInterfaceConfirm(LIE_LOW, 'deck'));
    }

    if (this.args._private.ThrowFestivity) {
      addPrimaryActionButton({
        id: 'throw_festivity_btn',
        text: _('Throw a Festivity'),
        callback: () => {
          this.updateInterfaceConfirm(THROW_FESTIVITY, '');
        },
      })
    }

    Object.values(this.args._private.Indulge || {}).forEach((card) => {
      onClick(document.getElementById(card.id), () =>
        this.updateInterfaceConfirm(INDULGE, card.id)
      );
    });

    Object.values(this.args._private.Cruise || {}).forEach((card) => {
      onClick(document.getElementById(card.id), () =>
        this.updateInterfaceConfirm(CRUISE, card.id)
      );
    });

    // addPrimaryActionButton({
    //   id: 'continue_btn',
    //   text: _('Roll dice'),
    //   callback: async () => {
    //     console.log('Shuffling gossip pile');

    //     const dice = [
    //       {
    //         type: '0',
    //         id: 'die1',
    //         face: 6,
    //       },
    //     ];

    //     Board.getInstance().diceStock.rollDice(dice, {
    //       effect: 'rollIn',
    //       duration: [800, 1200],
    //     });
    //     await sleep(1200);
    //   },
    // });
    addUndoButtons(this.args);
  }

  private updateInterfaceConfirm(action: string, target: string) {
    clearPossible();

    this.updateConfirmTitle(action, target);
    this.updateConfirmTargetSelected(action, target);

    addConfirmButton(() => {
      performAction('actTakeAction', {
        takenAction: action,
        target,
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

  private updateConfirmTargetSelected(action: string, target: string) {
    switch (action) {
      case CRUISE:
      case INDULGE:
        setSelected(document.getElementById(target));
        break;
      case LIE_LOW:
        setSelected(document.getElementById('moho-deck'));
        break;
      default:
        break;
    }
  }

  private updateConfirmTitle(action: string, target: string) {
    const site = StaticData.get().site(this.args.site.id).name;
    console.log(`Updating confirm title for action: ${action}, target: ${target}`);
    switch (action) {
      case CRUISE:
        updatePageTitle(
          _(
            'Cruise at ${site} and add ${value} of ${tkn_suit} to your reputation'
          ),
          {
            site,
            value: StaticData.get().viceCard(target).displayValue,
            tkn_suit: StaticData.get().viceCard(target).suit,
          }
        );
        break;
      case INDULGE:
        updatePageTitle(
          _(
            'Indulge at ${site} and add ${value} of ${tkn_suit} to your hand'
          ),
          {
            site,
            value: StaticData.get().viceCard(target).displayValue,
            tkn_suit: StaticData.get().viceCard(target).suit,
          }
        );
        break;
      case LIE_LOW:
        updatePageTitle(
          _('Lie Low at ${site} and draw a card from the vice deck?'),
          {
            site: StaticData.get().site(this.args.site.id).name,
          }
        );
        break;
      case THROW_FESTIVITY:
        updatePageTitle(
          _('Throw a Festivity at ${site}?'),
          {
            site,
          }
        );
        break;
      default:
        updatePageTitle(_('Confirm your action'));
        break;
    }
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
