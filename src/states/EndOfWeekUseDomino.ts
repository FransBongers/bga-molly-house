interface OnEnteringEndOfWeekUseDominoArgs extends CommonStateArgs {}

class EndOfWeekUseDomino implements State {
  private static instance: EndOfWeekUseDomino;
  private args: OnEnteringEndOfWeekUseDominoArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    EndOfWeekUseDomino.instance = new EndOfWeekUseDomino(game);
  }

  public static getInstance() {
    return EndOfWeekUseDomino.instance;
  }

  onEnteringState(args: OnEnteringEndOfWeekUseDominoArgs) {
    debug('Entering EndOfWeekUseDomino state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving EndOfWeekUseDomino state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringEndOfWeekUseDominoArgs
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
      _(
        '${you} may play Domino to ignore your reputation during Society Investigates'
      ),
      {}
    );

    addPrimaryActionButton({
      id: 'play_btn',
      text: _('Play Domino'),
      callback: () => {
        performAction('actEndOfWeekUseDomino', {
          playDomino: true,
        });
      },
    });

    addSecondaryActionButton({
      id: 'do_not_play_btn',
      text: _('Do not play Domino'),
      callback: () => {
        performAction('actEndOfWeekUseDomino', {
          playDomino: false,
        });
      },
    });
  }

  private updateInterfaceConfirm() {
    clearPossible();

    updatePageTitle(_('Confirm action'));

    addConfirmButton(() => {
      performAction('actEndOfWeekUseDomino', {});
    });
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
