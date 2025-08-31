const tplPlayerBoard = ({
  playerId,
  color,
}: {
  playerId: number;
  color: string;
}) => {
  return `
<div id="moho-player-row-${playerId}" class="moho-player-container">
  <div class="moho-player-row">
    <div id="moho-player-board-${playerId}" class="moho-player-board" data-color="${color}">
      <div id="item_1_${playerId}" class="moho-item-spot" data-spot="1"></div>
      <div id="item_2_${playerId}" class="moho-item-spot" data-spot="2"></div>
    </div>
    <div id="moho-reputation-${playerId}" class="moho-reputation"></div>
  </div>
  <div class="moho-player-row">
    <div id="moho-encounter-tokens-${playerId}" class="moho-encounter-tokens"></div>
  </div>
</div>`;
};

const tplPlayerCounters = ({ playerId }: { playerId: number }) => {
  return `
<div id="moho-counters-${playerId}-row-1" class="moho-counters-row">

</div>

`;
};
