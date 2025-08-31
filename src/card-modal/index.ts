class CardModal {
  protected game: GameAlias;
  protected pile: 'gossipPile' | 'safePile';

  private modal: Modal;
  private stock: LineStock<ViceCard>;

  constructor(game: GameAlias, pile: 'gossipPile' | 'safePile') {
    this.game = game;
    this.pile = pile;
    const gamedatas = game.gamedatas;

    this.setup(gamedatas);
  }

  // .##.....##.##....##.########...#######.
  // .##.....##.###...##.##.....##.##.....##
  // .##.....##.####..##.##.....##.##.....##
  // .##.....##.##.##.##.##.....##.##.....##
  // .##.....##.##..####.##.....##.##.....##
  // .##.....##.##...###.##.....##.##.....##
  // ..#######..##....##.########...#######.

  clearInterface() {}

  updateInterface(gamedatas: GamedatasAlias) {}

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  private setupModal(gamedatas: GamedatasAlias) {
    this.modal = new Modal(`moho-card-modal-${this.pile}`, {
      class: 'moho-card-modal',
      closeIcon: 'fa-times',
      titleTpl:
        '<h2 id="popin_${id}_title" class="${class}_title">${title}</h2>',
      title: this.pile === GOSSIP_PILE ? _('Gossip Pile') : _('Safe Pile'),
      contents: `<div id="moho-card-modal-content-${this.pile}" class="moho-card-modal-content"></div>`,
      closeAction: 'hide',
      verticalAlign: 'flex-start',
      breakpoint: 740,
    });
  }

  // Setup functions
  setup(gamedatas: GamedatasAlias) {
    this.setupModal(gamedatas);
    this.stock = new LineStock<ViceCard>(
      this.game.viceCardManager,
      document.getElementById(`moho-card-modal-content-${this.pile}`),
      { gap: '10px' }
    );
  }

  // .##.....##.########..########.....###....########.########
  // .##.....##.##.....##.##.....##...##.##......##....##......
  // .##.....##.##.....##.##.....##..##...##.....##....##......
  // .##.....##.########..##.....##.##.....##....##....######..
  // .##.....##.##........##.....##.#########....##....##......
  // .##.....##.##........##.....##.##.....##....##....##......
  // ..#######..##........########..##.....##....##....########

  // ..######...#######..##....##.########.########.##....##.########
  // .##....##.##.....##.###...##....##....##.......###...##....##...
  // .##.......##.....##.####..##....##....##.......####..##....##...
  // .##.......##.....##.##.##.##....##....######...##.##.##....##...
  // .##.......##.....##.##..####....##....##.......##..####....##...
  // .##....##.##.....##.##...###....##....##.......##...###....##...
  // ..######...#######..##....##....##....########.##....##....##...

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  async addCards(cards: ViceCardBase[]) {
    await this.stock.addCards(
      cards.map((card) => ({ ...getViceCard(card), location: 'modal' }))
    );
  }

  async addCard(card: ViceCardBase) {
    await this.stock.addCard({ ...getViceCard(card), location: 'modal' });
  }

  async removeCards() {
    this.stock.removeAll();
  }

  public open() {
    this.modal.show();
  }

  public close() {
    this.modal.hide();
  }
}
