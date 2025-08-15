const tplMarket = (gamedatas: GamedatasAlias) => `
<div> 
  <div id="moho-market">
    <div id="moho-safe-pile" class="moho-market-slot">
      <span id="moho-safe-pile-counter" class="moho-deck-counter"></span>
    </div>
    <div id="moho-deck" class="moho-market-slot moho-vice-card" data-card-id="back">
      <span id="moho-deck-counter" class="moho-deck-counter"></span>
    </div>
    <div id="moho-market-slots"></div>

  </div>
  <div id="moho-market-bar">
    <span>${_('Safe Pile')}</span>
    <span>${_('Deck')}</span>
    <span class="moho-market-label">${_('Market')}</span>
  </div>
</div>
`;


// <div id="moho-market-0" class="moho-market-slot"></div>
// <div id="moho-market-1" class="moho-market-slot"></div>
// <div id="moho-market-2" class="moho-market-slot"></div>
// <div id="moho-market-3" class="moho-market-slot"></div>