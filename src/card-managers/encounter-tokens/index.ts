class EncounterTokenManager extends CardManager<MohoEncounterToken> {
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

  setupDiv(card: MohoEncounterToken, div: HTMLElement) {
    div.style.position = 'relative';
    div.classList.add('moho-encounter-token-container');
    div.style.width = 'calc(var(--tokenScale) * 75px)';
    div.style.height = 'calc(var(--tokenScale) * 75px)';
  }

  setupFrontDiv(card: MohoEncounterToken, div: HTMLElement) {
    div.classList.add('moho-encounter-token');
    div.setAttribute('data-type', card.type);
    div.setAttribute('data-color', this.getPlayerColor(card));
    div.style.width = 'calc(var(--tokenScale) * 75px)';

    // this.game.tooltipManager.addCardTooltip({ nodeId: card.id, cardId: card.id });
  }

  setupBackDiv(card: MohoEncounterToken, div: HTMLElement) {
    div.classList.add('moho-encounter-token');
    div.setAttribute('data-type', 'back');
    div.setAttribute('data-color', this.getPlayerColor(card));
    div.style.width = 'calc(var(--tokenScale) * 75px)';
  }

  isCardVisible(card: MohoEncounterToken) {
    return card.type !== null;
  }

  getPlayerColor(card: MohoEncounterToken) {
    const playerId = Number(card.id.split('_')[1]);
    return HEX_COLOR_COLOR_MAP[
      PlayerManager.getInstance().getPlayer(playerId).getColor()
    ];
  }
}
