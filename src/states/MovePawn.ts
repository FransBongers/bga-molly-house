interface OnEnteringMovePawnArgs extends CommonStateArgs {}

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

    updatePageTitle(_('${you} must select a site'), {});
  }

  private updateInterfaceConfirm() {
    clearPossible();

    updatePageTitle(_('Confirm action'));

    addConfirmButton(() => {
      performAction('actMovePawn', {});
    });
  }
}
