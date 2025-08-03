interface OnEnteringPlayerSetupChooseCardArgs extends CommonStateArgs {
  _private: ViceCardBase[]
}

class PlayerSetupChooseCard implements State {
  private static instance: PlayerSetupChooseCard;
  private args: OnEnteringPlayerSetupChooseCardArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    PlayerSetupChooseCard.instance = new PlayerSetupChooseCard(game);
  }

  public static getInstance() {
    return PlayerSetupChooseCard.instance;
  }

  onEnteringState(args: OnEnteringPlayerSetupChooseCardArgs) {
    debug('Entering PlayerSetupChooseCard state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving PlayerSetupChooseCard state');
  }

  setDescription(activePlayerIds: number, args: OnEnteringPlayerSetupChooseCardArgs) {}

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

    updatePageTitle(_('${you} must select a card to place in your reputation'), {});

    this.args._private.forEach((card) => {
      onClick(document.getElementById(card.id),() => this.updateInterfaceConfirm(card))
    })
  }

  private updateInterfaceConfirm(card: ViceCardBase) {
    clearPossible();
    setSelected(card.id);

    const {value, suit} = getViceCard(card)

    updatePageTitle(_('Place ${value} of ${tkn_suit} in your reputation?'),{
      value: getViceCardValueText(value),
      tkn_suit: suit,
    });

    addConfirmButton(() => {
      performAction('actPlayerSetupChooseCard', {
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
