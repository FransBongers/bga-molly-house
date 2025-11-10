interface OnEnteringEndOfWeekEncounterSocietyArgs extends CommonStateArgs {
  _private: {
    encounterTokens: MohoEncounterToken[];
    site: MohoSiteBase;
  };
}

class EndOfWeekEncounterSociety implements State {
  private static instance: EndOfWeekEncounterSociety;
  private args: OnEnteringEndOfWeekEncounterSocietyArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    EndOfWeekEncounterSociety.instance = new EndOfWeekEncounterSociety(game);
  }

  public static getInstance() {
    return EndOfWeekEncounterSociety.instance;
  }

  onEnteringState(args: OnEnteringEndOfWeekEncounterSocietyArgs) {
    debug('Entering EndOfWeekEncounterSociety state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving EndOfWeekEncounterSociety state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringEndOfWeekEncounterSocietyArgs
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

    updatePageTitle(_('${you} must place an encounter token on ${siteName}'), {
      siteName: getSite(this.args._private.site).name,
    });

    setSelected(Board.getInstance().ui.selectBoxes[this.args._private.site.id]);

    this.args._private.encounterTokens.forEach((token) => {
      onClick(token.id, () => {
        this.updateInterfaceConfirm(token);
      });
    });
  }

  private updateInterfaceConfirm(token: MohoEncounterToken) {
    clearPossible();

    updatePageTitle(_('Place ${tkn_encounterToken} on ${siteName}'), {
      tkn_encounterToken: [token.color, token.type].join(':'),
      siteName: getSite(this.args._private.site).name,
    });
    setSelected(Board.getInstance().ui.selectBoxes[this.args._private.site.id]);
    setSelected(token.id);

    addConfirmButton(() => {
      performAction('actEndOfWeekEncounterSociety', {
        encounterTokenId: token.id,
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
