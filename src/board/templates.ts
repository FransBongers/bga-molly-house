const tplBoard = (gamedatas: GamedatasAlias) => `<div id="moho-board">
<div id="moho-playmat">
  <div id="moho-festivity"></div>
  <div id="moho-dice-stock"></div>
</div>
  <div id="moho-shops">
    <div id="CannonStreet" class="moho-shop"></div>
    <div id="DukeStreet" class="moho-shop"></div>
    <div id="LeadenhallStreet" class="moho-shop"></div>
    <div id="NobleStreet" class="moho-shop"></div>
  </div>
  <div id="moho-dangerous-cruising-markers"></div>
  <div id="house-raided-markers"></div>
  <div id="moho-select-boxes"></div>
  <div id="moho-pawns"></div>
  <div id="moho-evidence-counters"></div>
  <div id="moho-gossip-pile" class="moho-vice-card" data-card-id="back">
    <span id="moho-gossip-pile-counter" class="moho-deck-counter">10</span>
  </div>
  <div id="moho-markers"></div>

</div>`;

const createJoyMarker = (color: string): HTMLElement => {
  const elt = document.createElement('div');
  elt.classList.add('moho-joy-marker');
  elt.dataset.color = color;
  return elt;
}