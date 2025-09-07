//  .########..##..........###....##....##.########.########.
//  .##.....##.##.........##.##....##..##..##.......##.....##
//  .##.....##.##........##...##....####...##.......##.....##
//  .########..##.......##.....##....##....######...########.
//  .##........##.......#########....##....##.......##...##..
//  .##........##.......##.....##....##....##.......##....##.
//  .##........########.##.....##....##....########.##.....##

//  .##.....##....###....##....##....###.....######...########.########.
//  .###...###...##.##...###...##...##.##...##....##..##.......##.....##
//  .####.####..##...##..####..##..##...##..##........##.......##.....##
//  .##.###.##.##.....##.##.##.##.##.....##.##...####.######...########.
//  .##.....##.#########.##..####.#########.##....##..##.......##...##..
//  .##.....##.##.....##.##...###.##.....##.##....##..##.......##....##.
//  .##.....##.##.....##.##....##.##.....##..######...########.##.....##

class PlayerManager {
  private static instance: PlayerManager;
  private players: Record<number, MohoPlayer>;

  constructor(private game: GameAlias) {
    this.players = {};

    for (const playerId of game.gamedatas.playerOrder) {
      const player = game.gamedatas.players[playerId];
      this.players[playerId] = new MohoPlayer(this.game, player);
    }
  }

  public static create(game: GameAlias) {
    PlayerManager.instance = new PlayerManager(game);
  }

  public static getInstance() {
    return PlayerManager.instance;
  }

  // .##.....##.##....##.########...#######.
  // .##.....##.###...##.##.....##.##.....##
  // .##.....##.####..##.##.....##.##.....##
  // .##.....##.##.##.##.##.....##.##.....##
  // .##.....##.##..####.##.....##.##.....##
  // .##.....##.##...###.##.....##.##.....##
  // ..#######..##....##.########...#######.

  clearInterface() {
    Object.keys(this.players).forEach((playerId) => {
      this.players[playerId].clearInterface();
    });
  }

  public updateInterface(gamedatas: GamedatasAlias) {
    for (const playerId in gamedatas.players) {
      this.players[playerId].updateInterface(gamedatas);
    }
  }

  // .##.....##.########.####.##.......####.##....##
  // .##.....##....##.....##..##........##...##..##.
  // .##.....##....##.....##..##........##....####..
  // .##.....##....##.....##..##........##.....##...
  // .##.....##....##.....##..##........##.....##...
  // .##.....##....##.....##..##........##.....##...
  // ..#######.....##....####.########.####....##...

  getPlayer(playerId: number): PlayerAlias {
    return this.players[playerId];
  }

  getPlayers(): PlayerAlias[] {
    return Object.values(this.players);
  }

  getPlayerIds(): number[] {
    return Object.keys(this.players).map(Number);
  }

  /**
   * @returns playerId of the player viewing the game
   * NOTE: this can be a spectator
   */
  getCurrentPlayerId() {
    return this.game.getPlayerId();
  }
}
