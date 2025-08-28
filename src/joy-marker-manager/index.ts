class JoyMarkerManager extends CardManager<MohoJoyMarker> {
  constructor(public game: GameAlias) {
    super(game, {
      getId: (marker) => marker.id,
      setupDiv: (marker, div) => this.setupDiv(marker, div),
      setupFrontDiv: (marker, div: HTMLElement) =>
        this.setupFrontDiv(marker, div),
      setupBackDiv: (marker, div: HTMLElement) =>
        this.setupBackDiv(marker, div),
      isCardVisible: (marker) => this.isCardVisible(marker),
      animationManager: game.animationManager,
    });
  }

  clearInterface() {}

  setupDiv(marker: MohoJoyMarker, div: HTMLElement) {
    div.style.position = 'relative';
    div.classList.add('moho-joy-marker-container');
    div.style.width = 'calc(var(--tokenScale) * 42px)';
  }

  setupFrontDiv(marker: MohoJoyMarker, div: HTMLElement) {
    div.classList.add('moho-joy-marker');
    div.setAttribute('data-color', marker.color);
    div.style.width = 'calc(var(--tokenScale) * 42px)';
  }

  setupBackDiv(marker: MohoJoyMarker, div: HTMLElement) {
    div.classList.add('moho-joy-marker');
    div.setAttribute('data-color', marker.color);
    div.setAttribute('data-hanged', 'true');
    div.style.width = 'calc(var(--tokenScale) * 42px)';
  }

  isCardVisible(card: MohoJoyMarker) {
    return !card.hanged;
  }
}
