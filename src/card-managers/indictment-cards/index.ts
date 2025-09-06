class IndictmentManager extends CardManager<MohoIndictment> {
  constructor(public game: GameAlias) {
    super(game, {
      getId: (card) => card.id,
      setupDiv: (card, div) => this.setupDiv(card, div),
      setupFrontDiv: (card, div: HTMLElement) => this.setupFrontDiv(card, div),
      setupBackDiv: (card, div: HTMLElement) => this.setupBackDiv(card, div),
      isCardVisible: (card) => this.isCardVisible(card),
      animationManager: game.animationManager,
    });
  }

  clearInterface() {}

  setupDiv(card: MohoIndictment, div: HTMLElement) {
    div.style.position = 'relative';
    div.classList.add('moho-indictment-container');
    div.style.width = 'calc(var(--cardScale) * 178px)';
  }

  setupFrontDiv(card: MohoIndictment, div: HTMLElement) {
    div.classList.add('moho-indictment');
    div.setAttribute('data-indictment-id', card.indictmentId);
    div.style.width = 'calc(var(--cardScale) * 178px)';

    // this.game.tooltipManager.addCardTooltip({ nodeId: card.id, cardId: card.id });
  }

  setupBackDiv(card: MohoIndictment, div: HTMLElement) {
    div.classList.add('moho-indictment');
    div.setAttribute('data-indictment-id', card.type);
    div.style.width = 'calc(var(--cardScale) * 178px)';
  }

  isCardVisible(card: MohoIndictment) {
    if (card.indictmentId === null) {
      return false;
    }

    return true;
  }
}
