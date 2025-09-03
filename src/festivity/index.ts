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
  public playedDresses: LineStock<MohoItem>;

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
    gamedatas.festivity.communityCards.map(getViceCard).forEach((card) => {
      this.stocks[COMMUNITY].addCard(card);
      if (card.displayValue === 'R') {
        this.addRogueValue(card.id, card.festivityValue);
      }
    });

    Object.entries(gamedatas.players).forEach(([playerId, player]) => {
      player.festivity.map(getViceCard).forEach((card) => {
        this.stocks[playerId].addCard(card);
        if (card.displayValue === 'R') {
          this.addRogueValue(card.id, card.festivityValue);
        }
      });
    });
    this.playedDresses.addCards(gamedatas.festivity.playedDresses.map(getItem));
  }

  public addRogueValue(cardId: string, value: number) {
    const frontElt = document.getElementById(`${cardId}-front`);
    if (!frontElt) {
      return;
    }

    const roqgueValueElt = document.createElement('span');
    roqgueValueElt.id = `${cardId}-rogue-value`;
    roqgueValueElt.classList.add('moho-rogue-value');
    roqgueValueElt.innerHTML = value.toString();
    frontElt.appendChild(roqgueValueElt);
  }

  public removeRogueValue(cardId: string) {
    const rogueValueElt = document.getElementById(`${cardId}-rogue-value`);
    if (rogueValueElt) {
      rogueValueElt.remove();
    }
  }

  public setupFestivity(gamedatas: GamedatasAlias) {
    this.festivityContainer = document.getElementById('moho-festivity');
    const players = PlayerManager.getInstance().getPlayers();
    const playerCount = players.length;

    const communityContainerElt = this.createPlayerElement(
      COMMUNITY,
      _('Community')
    );
    setAbsolutePosition(
      communityContainerElt,
      CARD_SCALE,
      getFestivityPosition(playerCount, COMMUNITY)
    );
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
      setAbsolutePosition(
        containerElt,
        CARD_SCALE,
        getFestivityPosition(playerCount, index)
      );
    });

    const dressesContainerElt = document.createElement('div');
    dressesContainerElt.id = 'moho-festivity-played-dresses';
    this.festivityContainer.appendChild(dressesContainerElt);
    setAbsolutePosition(
      dressesContainerElt,
      CARD_SCALE,
      getFestivityPosition(playerCount, PLAYED_DRESSES)
    );
    this.playedDresses = new LineStock<MohoItem>(
      this.game.itemManager,
      dressesContainerElt,
      {
        gap: '0px',
        wrap: 'nowrap',
      }
    );
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
