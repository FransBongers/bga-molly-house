interface OnEnteringNewspaperNoticeArgs extends CommonStateArgs {
  desires: ViceCardBase[];
}

class NewspaperNotice implements State {
  private static instance: NewspaperNotice;
  private args!: OnEnteringNewspaperNoticeArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    NewspaperNotice.instance = new NewspaperNotice(game);
  }

  public static getInstance() {
    return NewspaperNotice.instance;
  }

  onEnteringState(args: OnEnteringNewspaperNoticeArgs) {
    debug('Entering NewspaperNotice state');
    this.args = args;

    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving NewspaperNotice state');
  }

  setDescription(
    activePlayerIds: number,
    args: OnEnteringNewspaperNoticeArgs,
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
        '${you} may add all desires in the market to the gossip pile or to your reputation',
      ),
      {},
    );

    addPrimaryActionButton({
      id: 'gossip_pipe_btn',
      text: _('Add to gossip pile'),
      callback: () => {
        performAction('actNewspaperNotice', { addTo: GOSSIP_PILE });
      },
    });

    addPrimaryActionButton({
      id: 'reputation_btn',
      text: _('Add to reputation'),
      callback: () => {
        performAction('actNewspaperNotice', { addTo: REPUTATION });
      },
    });

    this.args.desires.forEach((desire) => setSelected(desire.id));

    addUndoButtons(this.args);
  }

  private updateInterfaceConfirm() {
    clearPossible();

    updatePageTitle(_('Confirm action'));

    addConfirmButton(() => {
      performAction('actNewspaperNotice', {});
    });
  }
}
