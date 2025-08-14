// .##.....##....###....##....##.########.
// .##.....##...##.##...###...##.##.....##
// .##.....##..##...##..####..##.##.....##
// .#########.##.....##.##.##.##.##.....##
// .##.....##.#########.##..####.##.....##
// .##.....##.##.....##.##...###.##.....##
// .##.....##.##.....##.##....##.########.

class Festivity {
  private static instance: Festivity;
  private game: GameAlias;
  public stocks: Record<string | number, LineStock<ViceCard>> = {};
  private festivityContainer: HTMLElement;

  constructor(game: GameAlias) {
    this.game = game;

    this.setupFestivity(game.gamedatas);
    this.updateFestivity(game.gamedatas);
    this.setFestivityActive(game.gamedatas.festivity.active);
  }

  public static create(game: GameAlias) {
    Festivity.instance = new Festivity(game);
  }

  public static getInstance() {
    return Festivity.instance;
  }

  updateFestivity(gamedatas: GamedatasAlias) {
    this.stocks[COMMUNITY].addCards(
      gamedatas.festivity.communityCards.map(getViceCard)
    );

    Object.entries(gamedatas.players).forEach(([playerId, player]) => {
      this.stocks[playerId].addCards(player.festivity.map(getViceCard));
    });


  }

  public setupFestivity(gamedatas: GamedatasAlias) {
    this.festivityContainer = document.getElementById('moho-festivity');
    const players = PlayerManager.getInstance().getPlayers();
    const playerCount = players.length;

    const communityContainerElt = this.createPlayerElement(COMMUNITY, _('Community'));
    setAbsolutePosition(communityContainerElt, CARD_SCALE, getFestivityPosition(playerCount, COMMUNITY));
    // const communityCards = document.createElement('div');
    // communityCards.classList.add('moho-festivity-stock');
    // communityCards.id = 'moho-festivity-community';

    // this.festivityContainer.appendChild(communityCards);

    const playerManager = PlayerManager.getInstance();

    gamedatas.playerOrder.forEach((playerId, index) => {
      const containerElt = this.createPlayerElement(
        playerId,
        formatStringRecursive('${tkn_playerName}', {
          tkn_playerName: playerManager.getPlayer(playerId).getName(),
        })
      );
      setAbsolutePosition(containerElt, CARD_SCALE, getFestivityPosition(playerCount, index));
      // const playerId = player.getPlayerId();
      // const playerElt = document.createElement('div');
      // playerElt.id = `moho-festivity-${playerId}`;
      // this.festivityContainer.appendChild(playerElt);
      // playerElt.classList.add('moho-festivity-stock');

      // this.stocks[playerId] = new LineStock<ViceCard>(
      //   this.game.viceCardManager,
      //   playerElt,
      //   {
      //     gap: '0px',
      //   }
      // );
    });

    // Board.getInstance().ui.containers.board.appendChild(elt);
  }

  private createPlayerElement(playerId: string | number, playerName: string) {
    const containerElt = document.createElement('div');
    containerElt.id = `moho-festivity-${playerId}`;
    containerElt.classList.add('moho-festivity-container');

    const nameSpan = document.createElement('span');
    nameSpan.innerHTML = playerName;

    const playerStockElt = document.createElement('div');
    playerStockElt.classList.add('moho-festivity-stock');
    containerElt.appendChild(playerStockElt);
    containerElt.appendChild(nameSpan);

    this.festivityContainer.appendChild(containerElt);

    this.stocks[playerId] = new LineStock<ViceCard>(
      this.game.viceCardManager,
      playerStockElt,
      {
        gap: '0px',
        wrap: 'nowrap',
      }
    );

    return containerElt;
  }

  setFestivityActive(active: boolean) {
    this.festivityContainer.dataset.active = active ? 'true' : 'false';
  }
}
