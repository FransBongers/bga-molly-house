const FESTIVITY_CONFIG_TWO_PLAYERS: Record<string | number, AbsolutePosition> =
  {
    [COMMUNITY]: {
      top: 250,
      left: 10,
    },
    [0]: {
      top: 487,
      left: 470,
    },
    [1]: {
      top: 10,
      left: 530,
    },
  };

const getFestivityPosition = (
  playerCount: number,
  position: 'community' | number
) => {
  switch (playerCount) {
    case 2:
      return FESTIVITY_CONFIG_TWO_PLAYERS[position];
    default:
      return {
        top: 0,
        left: 0,
      };
  }
};
