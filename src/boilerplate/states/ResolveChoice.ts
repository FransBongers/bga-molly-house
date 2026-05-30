interface ChoiceArgs {
  id: number;
  args: {
    action: string;
    optionalAction: boolean;
  };
  description:
    | string
    | {
        log: string;
        args: Record<string, unknown>;
      };
  optionalAction: boolean;
  source: unknown | null;
  sourceId: string | null;
}

interface OnEnteringResolveChoiceArgs extends CommonStateArgs {
  allChoices: Record<number, ChoiceArgs>;
  choices: Record<number, ChoiceArgs>;
  descSuffix: 'xor'; // Can be removed
  buttonType: 'primary' | 'secondary';
  description?:
    | string
    | {
        log: string;
        args: Record<string, unknown>;
      };
  descriptionmyturn?:
    | string
    | {
        log: string;
        args: Record<string, unknown>;
      };
}

class ResolveChoice implements State {
  private static instance: ResolveChoice;
  private args!: OnEnteringResolveChoiceArgs;

  constructor(private game: GameAlias) {}

  public static create(game: GameAlias) {
    ResolveChoice.instance = new ResolveChoice(game);
  }

  public static getInstance() {
    return ResolveChoice.instance;
  }

  onEnteringState(args: OnEnteringResolveChoiceArgs) {
    this.args = args;
    this.updateInterfaceInitialStep();
  }

  onLeavingState() {
    debug('Leaving ResolveChoiceState');
  }

  setDescription(activePlayerId: number, args: OnEnteringResolveChoiceArgs) {
    this.args = args;
    if (!this.args.description) {
      return;
    }
    if (typeof this.args.description === 'string') {
      updatePageTitle(_(this.args.description), {});
    } else if (typeof this.args.description === 'object') {
      updatePageTitle(
        _(this.args.description.log),
        this.args.description.args,
      );
    }
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

    if (
      this.args.descriptionmyturn &&
      typeof this.args.descriptionmyturn === 'string'
    ) {
      updatePageTitle(_(this.args.descriptionmyturn));
    } else if (
      this.args.descriptionmyturn &&
      typeof this.args.descriptionmyturn === 'object'
    ) {
      updatePageTitle(
        _(this.args.descriptionmyturn.log),
        this.args.descriptionmyturn.args,
      );
    } else {
      updatePageTitle(
        this.args.optionalAction
          ? _('${you} may choose')
          : _('${you} must choose'),
      );
    }

    Object.values(this.args.choices).forEach((choice) => {
      this.addChoiceActionButton(choice);
    });
    Object.values(this.args.allChoices).forEach((choice) => {
      this.addChoiceActionButton(choice, true);
    });
    addUndoButtons(this.args);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private addChoiceActionButton(choice: ChoiceArgs, disabled = false) {
    const eltId = `choice_btn_${choice.id}`;

    if (document.getElementById(eltId)) {
      return;
    }

    const button =
      this.args.buttonType === SECONDARY || choice.id === 99 // 99 is pass
        ? addSecondaryActionButton
        : addPrimaryActionButton;

    button({
      id: eltId,
      text:
        typeof choice.description === 'string'
          ? choice.description
          : Interaction.use().formatStringRecursive(
              choice.description.log,
              choice.description.args,
            ),
      extraClasses: disabled ? 'disabled' : '',
      callback: () => {
        const choiceId = choice.id;
        this.game.bga.actions.performAction('actChooseAction', {
          choiceId: choice.id,
        });
      },
    });
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
