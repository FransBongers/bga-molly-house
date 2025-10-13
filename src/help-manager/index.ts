const LOCAL_STORAGE_HELP_ACTIONS_FOLDED_KEY = 'MollyHouse-help-actions-folded';
const LOCAL_STORAGE_HELP_TURN_FOLDED_KEY = 'MollyHouse-help-turn-folded';

class MollyHouseHelpManager {
  protected game: GameAlias;
  private static instance: MollyHouseHelpManager;

  constructor(game: GameAlias) {
    this.game = game;

    this.setup();
  }

  public static create(game: GameAlias) {
    MollyHouseHelpManager.instance = new MollyHouseHelpManager(game);
  }

  public static getInstance() {
    return MollyHouseHelpManager.instance;
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  setup() {
    new HelpManager(this.game, {
      buttons: [
        // new BgaHelpPopinButton({
        //   title: _('Icons'),
        //   html: '<div></div>',
        //   buttonBackground: '#87a04f',
        // }),
        new BgaHelpExpandableButton({
          expandedWidth: '419px',
          expandedHeight: '300px',
          defaultFolded: true,
          localStorageFoldedKey: LOCAL_STORAGE_HELP_ACTIONS_FOLDED_KEY,
          buttonExtraClasses: `moho-festivity-help-actions`,
          unfoldedHtml: this.getFestivityAidHtml(),
        }),
        // new BgaHelpExpandableButton({
        //   expandedWidth: '326px',
        //   expandedHeight: '456px',
        //   defaultFolded: true,
        //   localStorageFoldedKey: LOCAL_STORAGE_HELP_TURN_FOLDED_KEY,
        //   buttonExtraClasses: `help-turn`,
        //   unfoldedHtml: this.getHelpTurnHtml(),
        // }),
      ],
    });
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private getFestivityAidHtml(): string {
    return `
      <div class="moho-festivity-aid">
        <div class="moho-festivity-aid-header">
          <span class="moho-title">${_('Festivity Ranking')}</span><span class="moho-title">${_('Bonus')}</span>
        </div>
        <div id="moho-surprise-ball" class="moho-rank-container">
          <span class="moho-rank-order">${_('First')},</span>
          <span class="moho-rank">${_('Surprise Ball')}</span>
        </div>
        <div id="moho-christening" class="moho-rank-container">
          <span class="moho-rank-order">${_('Second')},</span>
          <span class="moho-rank">${_('Christening')}</span>
        </div>
        <div id="moho-dance" class="moho-rank-container">
          <span class="moho-rank-order">${_('Third')},</span>
          <span class="moho-rank">${_('Dance')}</span>
        </div>
        <div id="moho-quiet-gathering" class="moho-rank-container">
          <span class="moho-rank-order">${_('Otherwise, form a')}</span>
          <span style="text-align: left;">
            <span class="moho-rank">${_('Quiet Gathering')}</span> <span>${_('with constables / lowest')}</span>
          </span>
          <span class="moho-rank-order">${_('(ignore rogues)')}</span>
        </div>
        <div id="moho-surprise-ball-bonus" class="moho-bonus-container">
          <span>+</span><span class="moho-bonus-amount">m</span>
        </div>
        <div id="moho-christening-bonus" class="moho-bonus-container">
          <span>+</span><span class="moho-bonus-amount">m</span>
        </div>
        <div id="moho-dance-bonus" class="moho-bonus-container">
          <span>+</span><span class="moho-bonus-amount">m</span>
        </div>
        <div id="moho-quiet-gathering-bonus" class="moho-bonus-container">
          <span>-</span><span class="moho-bonus-amount">m</span>
        </div>
        <span id="moho-matching-reputation">${_('m = matching reputation')}</span>
      </div>
      `;
  }
}
