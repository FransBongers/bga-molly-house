class ViceCardManager extends CardManager<ViceCard> {
  constructor(public game: GameAlias) {
    super(game, {
      getId: (card) => card.id,
      setupDiv: (card, div) => this.setupDiv(card, div),
      setupFrontDiv: (card, div: HTMLElement) => this.setupFrontDiv(card, div),
      setupBackDiv: (card, div: HTMLElement) => this.setupBackDiv(card, div),
      isCardVisible: (card) => this.isCardVisible(card),
      fakeCardGenerator: (deckId: string) => ({
        id: `fake-card-${deckId}`,
        location: deckId,
      } as ViceCard),
      animationManager: game.animationManager,
      cardHeight: 225,
      cardWidth: 161,
    });
  }

  clearInterface() {}

  setupDiv(card: ViceCard, div: HTMLElement) {
    div.style.position = 'relative';
    div.classList.add('moho-vice-card-container');
  }

  setupFrontDiv(card: ViceCard, div: HTMLElement) {
    div.classList.add('moho-vice-card');
    div.setAttribute('data-card-id', card.id);


    // this.game.tooltipManager.addCardTooltip({ nodeId: card.id, cardId: card.id });
  }

  setupBackDiv(card: ViceCard, div: HTMLElement) {
    div.classList.add('moho-vice-card');
    div.setAttribute('data-card-id', 'back');
  }

  isCardVisible(card: ViceCard) {
    if (card.location === GOSSIP_PILE || card.id.startsWith('fake')) {
      return false;
    }
    return true;
  }
}
