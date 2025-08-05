class StaticData {
  private static instance: StaticData;
  private game: GameAlias;
  private staticData: MollyHouseGamedatas['staticData'];

  constructor(game: GameAlias) {
    this.game = game;
    this.staticData = game.gamedatas.staticData;
  }

  public static create(game: GameAlias) {
    StaticData.instance = new StaticData(game);
  }

  public static get() {
    return StaticData.instance;
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  public viceCard(id: string): ViceCardStaticData {
    const data = this.staticData.viceCards[id];
    if (!data) {
      throw new Error('FE_ERROR_001');
    }
    return data;
  }

  public site(id: string): MohoSiteStaticData {
    const data = this.staticData.sites[id];
    if (!data) {
      throw new Error('FE_ERROR_002');
    }
    return data;
  }
}
