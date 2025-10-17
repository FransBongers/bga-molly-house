class GatherEvidence {
  private static instance: GatherEvidence;
  private game: GameAlias;

  private containerElt: HTMLElement;

  public stocks: Record<
    string, // suit
    {
      threats: LineStock<ViceCard>;
      cards: LineStock<ViceCard>;
    }
  > = {};

  constructor(game: GameAlias) {
    this.game = game;

    this.setupGatherEvidence(game.gamedatas);

    this.setGatherEvidenceActive(false);
  }

  public static create(game: GameAlias) {
    GatherEvidence.instance = new GatherEvidence(game);
  }

  public static getInstance() {
    return GatherEvidence.instance;
  }

  private setupGatherEvidence(gamedatas: GamedatasAlias) {
    this.containerElt = document.getElementById('moho-gather-evidence');

    SUITS.forEach((suit) => {
      this.stocks[suit] = {
        threats: new LineStock<ViceCard>(
          this.game.viceCardManager,
          document.getElementById(`moho-gather-evidence-${suit}-threats`),
          {
            gap: '0px',
            wrap: 'nowrap',
          }
        ),
        cards: new LineStock<ViceCard>(
          this.game.viceCardManager,
          document.getElementById(`moho-gather-evidence-${suit}-cards`),
          {
            gap: '0px',
            wrap: 'nowrap',
          }
        ),
      };
    });
  }

  setGatherEvidenceActive(active: boolean) {
    this.containerElt.dataset.active = active ? 'true' : 'false';
    Board.getInstance().setGatherEvidenceActive(active);
  }

  public async addCard(card: ViceCardBase, counter: number) {
    const board = Board.getInstance();
    const viceCard = getViceCard(card);
    await Interaction.use().wait(counter * 150);
    const location = viceCard.location;
    viceCard.location = GOSSIP_PILE;
    await board.gossipPile.addCard(viceCard);
    viceCard.location = location;
    const [_prefix, cardOrThreat, suit] = viceCard.location.split('_');
    board.counters[GOSSIP_PILE].incValue(-1);
    await this.stocks[suit][cardOrThreat as 'cards' | 'threats'].addCard(
      viceCard
    );
  }
}
