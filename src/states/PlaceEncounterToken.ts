interface OnEnteringPlaceEncounterTokenArgs extends CommonStateArgs {
  site: MohoSiteBase;
  _private: MohoEncounterToken[];
}

class PlaceEncounterToken implements State {
  private static instance: PlaceEncounterToken;
  private args: OnEnteringPlaceEncounterTokenArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    PlaceEncounterToken.instance = new PlaceEncounterToken(game);
  }

  public static getInstance() {
    return PlaceEncounterToken.instance;
  }

  onEnteringState(args: OnEnteringPlaceEncounterTokenArgs) {
    debug('Entering PlaceEncounterToken state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving PlaceEncounterToken state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringPlaceEncounterTokenArgs
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
      _('${you} may place an encounter token face up on ${site}'),
      {
        site: _(StaticData.get().site(this.args.site.id).name),
      }
    );
    this.args._private.forEach((token) => {
      onClick(token.id, () => {
        this.updateInterfaceConfirm(token);
      });
    });

    addUndoButtons(this.args);
  }

  private updateInterfaceConfirm(token: MohoEncounterToken) {
    clearPossible();

    const site = getSite(this.args.site);
    const playerColor = getPlayerColor(
      PlayerManager.getInstance().getCurrentPlayerId()
    );

    updatePageTitle(_('Place ${tkn_encounterToken} face up on ${site}?'), {
      tkn_encounterToken: `${playerColor}:${token.type}`,
      site: _(site.name),
    });
    setSelected(token.id);

    addConfirmButton(() => {
      performAction('actPlaceEncounterToken', {
        tokenId: token.id,
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
