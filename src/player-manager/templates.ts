const tplPlayerBoard = ({
  playerId,
  color,
}: {
  playerId: number;
  color: string;
}) => {
  return `
<div id="moho-player-row-${playerId}" class="moho-player-row">
  <div id="moho-player-board-${playerId}" class="moho-player-board" data-color="${color}"></div>
  <div id="moho-reputation-${playerId}" class="moho-reputation"></div>
</div>

`;
};

const tplPlayerCounters = ({ playerId }: { playerId: number }) => {
  return `
<div id="moho-counters-${playerId}-row-1" class="moho-counters-row">

</div>

`;
};
