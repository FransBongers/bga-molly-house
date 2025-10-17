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
    [PLAYED_DRESSES]: {
      top: 250,
      left: 305,
    },
  };

const FESTIVITY_CONFIG_THREE_PLAYERS: Record<
  string | number,
  AbsolutePosition
> = {
  [COMMUNITY]: {
    top: 250,
    left: 10,
  },
  [0]: {
    top: 487,
    left: 313,
  },
  [1]: {
    top: 10,
    left: 313,
  },
  [2]: {
    top: 250,
    left: 612,
  },
  [PLAYED_DRESSES]: {
    top: 280,
    left: 305,
  },
};

const FESTIVITY_CONFIG_FOUR_PLAYERS: Record<string | number, AbsolutePosition> =
  {
    [COMMUNITY]: {
      top: 250,
      left: 310,
    },
    [0]: {
      top: 495,
      left: 612,
    },
    [1]: {
      top: 495,
      left: 10,
    },
    [2]: {
      top: 10,
      left: 10,
    },
    [3]: {
      top: 10,
      left: 612,
    },
    [PLAYED_DRESSES]: {
      top: 250,
      left: 605,
    },
  };

const FESTIVITY_CONFIG_FIVE_PLAYERS: Record<string | number, AbsolutePosition> =
  {
    [COMMUNITY]: {
      top: 320,
      left: 310,
    },
    [0]: {
      top: 495,
      left: 612,
    },
    [1]: {
      top: 495,
      left: 10,
    },
    [2]: {
      top: 10,
      left: 10,
    },
    [3]: {
      top: 10,
      left: 310,
    },
    [4]: {
      top: 10,
      left: 612,
    },
    [PLAYED_DRESSES]: {
      top: 250,
      left: 605,
    },
  };

const getFestivityPosition = (
  playerCount: number,
  position: 'playedDresses' | 'community' | number
) => {
  switch (playerCount) {
    case 2:
      return FESTIVITY_CONFIG_TWO_PLAYERS[position];
    case 3:
      return FESTIVITY_CONFIG_THREE_PLAYERS[position];
    case 4:
      return FESTIVITY_CONFIG_FOUR_PLAYERS[position];
    case 5:
      return FESTIVITY_CONFIG_FIVE_PLAYERS[position];
    default:
      return {
        top: 0,
        left: 0,
      };
  }
};
