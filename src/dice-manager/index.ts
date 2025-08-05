interface Die {
  id: number;
  value: number;
}

class MollyHouseDie extends BgaDie6 {
  size?: number;

  constructor() {
    super();
    this.size = 48;
  }
}

class MollyHouseDiceManager extends DiceManager {
  constructor(game: GameAlias) {
    super(game, {
      dieTypes: {
        '0': new MollyHouseDie(),
      },
      perspective: 1000,
    });
  }
}
