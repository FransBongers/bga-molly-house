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
    div.style.height = 'calc(var(--cardScale) * 225px)';
    div.style.width = 'calc(var(--cardScale) * 161px)';
  }

  setupFrontDiv(card: ViceCard, div: HTMLElement) {
    div.classList.add('moho-vice-card');
    div.setAttribute('data-card-id', card.id);
    div.style.height = 'calc(var(--cardScale) * 225px)';
    div.style.width = 'calc(var(--cardScale) * 161px)';

    // this.game.tooltipManager.addCardTooltip({ nodeId: card.id, cardId: card.id });
  }

  setupBackDiv(card: ViceCard, div: HTMLElement) {
    div.classList.add('moho-vice-card');
    div.setAttribute('data-card-id', 'back');
    div.style.height = 'calc(var(--cardScale) * 225px)';
    div.style.width = 'calc(var(--cardScale) * 161px)';
  }

  isCardVisible(card: ViceCard) {
    if (card.hidden || [DECK, GOSSIP_PILE,].includes(card.location) || card.id.startsWith('fake')) {
      return false;
    }
    return true;
  }
}
