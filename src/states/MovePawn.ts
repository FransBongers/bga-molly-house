interface OnEnteringMovePawnArgs extends CommonStateArgs {
  pawn: MohoPawn;
  sites: Record<string, MohoSiteBase>;
}

class MovePawn implements State {
  private static instance: MovePawn;
  private args: OnEnteringMovePawnArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    MovePawn.instance = new MovePawn(game);
  }

  public static getInstance() {
    return MovePawn.instance;
  }

  onEnteringState(args: OnEnteringMovePawnArgs) {
    debug('Entering MovePawn state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving MovePawn state');
  }

  setDescription(activePlayerIds: number, args: OnEnteringMovePawnArgs) {}

  private updateInterfaceInitialStep() {
    this.game.clearPossible();

    updatePageTitle(_('${you} must select a site to move ${tkn_pawn} to'), {
      tkn_pawn: tknPawn(this.args.pawn)
    });

    const board = Board.getInstance();
    Object.entries(this.args.sites).forEach(([siteId, site]) => {
      onClick(board.ui.selectBoxes[siteId], () => this.updateInterfaceConfirm(site));
    });
  }

  private updateInterfaceConfirm(site: MohoSiteBase) {
    clearPossible();

    updatePageTitle(_('Move ${tkn_pawn} to ${site}?'), {
      site: StaticData.get().site(site.id).name,
      tkn_pawn: tknPawn(this.args.pawn)
    });
    const board = Board.getInstance();
    setSelected(board.ui.selectBoxes[site.id])

    addConfirmButton(() => {
      performAction('actMovePawn', {
        siteId: site.id,
      });
    });
    addCancelButton();
  }
}
