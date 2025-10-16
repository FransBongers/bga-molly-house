const LOCAL_STORAGE_HELP_FESTIVITY_FOLDED_KEY =
  'MollyHouse-help-festivity-folded';
const LOCAL_STORAGE_HELP_REVEALED_INFORMER_FOLDED_KEY =
  'MollyHouse-help-revealed-informer-folded';

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
          localStorageFoldedKey: LOCAL_STORAGE_HELP_FESTIVITY_FOLDED_KEY,
          buttonExtraClasses: `moho-festivity-help-actions`,
          unfoldedHtml: this.getFestivityAidHtml(),
        }),
        new BgaHelpExpandableButton({
          expandedWidth: '300px',
          expandedHeight: '419px',
          defaultFolded: true,
          localStorageFoldedKey:
            LOCAL_STORAGE_HELP_REVEALED_INFORMER_FOLDED_KEY,
          buttonExtraClasses: `moho-revealed-informer-help-actions`,
          unfoldedHtml: this.getRevealedInformerAidHtml(),
        }),
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

  private getRevealedInformerAidHtml(): string {
    return `
      <div class="moho-revealed-informer-aid moho-player-aid">
        <span class="moho-title center">${_('Revealed Informer Aid')}</span>
        <span class="center" style="margin-top: 20px;">${_('You may be revealed by other players at your site.')}</span>
        <div class="moho-if-revealed" style="margin: 8px; padding: 4px;">
          <span>${_(
            'If you are revealed, add any matching cards in your reputation to the safe pile (do not use the Pride Rule).'
          )}</span>
        </div>
        <span>${_('Revealed informers are:')}</span>
        <div class="moho-revealed-informer-rule">
          <span class="moho-bold">${_('A Social Pariah.')}</span> <span>${_('Excess hand cards are added to the safe pile.')}</span>
        </div>
        <div class="moho-revealed-informer-rule">
          <span class="moho-bold">${_('A Known Threat.')}</span> <span>${_('After scoring at festivities, add any matching cards in your reputation to the safe pile.')}</span>
        </div>
        <span style="margin-top: 8px;">${_('At the end of the week, do not reveal matching threats in your hand.')}</span>
        <div class="moho-revealed-informer-rule">
          <span class="moho-bold">${_('Unwelcome.')}</span> <span>${_('You cannot take site actions at the matching molly house or the adjacent sites. If a festivity is thrown at the matching house, you may not play items, and, on your turn you must draw and reveal a card for the community instead of playing a card.')}</span>
        </div>
      </div>
    `;
  }

  private getFestivityAidHtml(): string {
    return `
      <div class="moho-festivity-aid moho-player-aid">
        <div class="moho-festivity-aid-header">
          <span class="moho-title">${_(
            'Festivity Ranking'
          )}</span><span class="moho-title">${_('Bonus')}</span>
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
            <span class="moho-rank">${_('Quiet Gathering')}</span> <span>${_(
      'with constables / lowest'
    )}</span>
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
        <span id="moho-matching-reputation">${_(
          'm = matching reputation'
        )}</span>
      </div>
      `;
  }
}
