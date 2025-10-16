class ItemManager extends CardManager<MohoItem> {
  constructor(public game: GameAlias) {
    super(game, {
      getId: (card) => card.id,
      setupDiv: (card, div) => this.setupDiv(card, div),
      setupFrontDiv: (card, div: HTMLElement) => this.setupFrontDiv(card, div),
      setupBackDiv: (card, div: HTMLElement) => this.setupBackDiv(card, div),
      isCardVisible: (card) => this.isCardVisible(card),

      animationManager: game.animationManager,
      cardHeight: 225,
      cardWidth: 161,
    });
  }

  clearInterface() {}

  setupDiv(card: MohoItem, div: HTMLElement) {
    div.style.position = 'relative';
    div.classList.add('moho-item-container');
    div.style.width = 'calc(var(--cardScale) * 178px)';
  }

  setupFrontDiv(card: MohoItem, div: HTMLElement) {
    div.classList.add('moho-item');
    div.setAttribute('data-type', card.type);
    div.style.width = 'calc(var(--cardScale) * 178px)';

    TooltipManager.getInstance().addTextTooltip({ nodeId: card.id, text: card.text, title: card.name });
  }

  setupBackDiv(card: MohoItem, div: HTMLElement) {
    div.classList.add('moho-item');
    div.setAttribute('data-type', 'Back');
    div.style.width = 'calc(var(--cardScale) * 178px)';
  }

  isCardVisible(card: MohoItem) {
    return ![DISCARD, DECK].includes(card.location);
  }
}
