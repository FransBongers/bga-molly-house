const getItem = (base: MohoItemBase): MohoItem => {
  return {
    ...base,
    ...StaticData.get().item(base.id),
  };
};

const getViceCard = (base: ViceCardBase): ViceCard => {
  return {
    ...base,
    ...StaticData.get().viceCard(base.id),
  };
};

const getSite = (base: MohoSiteBase): MohoSite => {
  return {
    ...base,
    ...StaticData.get().site(base.id),
  };
};

const getPlayerColor = (playerId: number) => {
  const playerManager = PlayerManager.getInstance();
  return HEX_COLOR_COLOR_MAP[playerManager.getPlayer(playerId).getColor()];
};

const getEncounterTokenTypeText = (
  type: 'Loyal' | 'Informer' | null
): string => {
  switch (type) {
    case 'Loyal':
      return _('Loyal');
    case 'Informer':
      return _('Informer');
    default:
      return _('Unknown');
  }
};

const getViceCardValueText = (value: string | number): string => {
  switch (value) {
    case 'Q':
      return _('Queen');
    case 'J':
      return _('Jack');
    case 'R':
      return _('Rogue');
    case 'C':
      return _('Constable');
    default:
      return String(value);
  }
};

const getDice = (diceValues: number[]): BgaDie[] => {
  const dice = diceValues.map((faceIndex, id) => ({
    id,
    face: faceIndex + 1,
    type: 0,
  }));
  return dice;
};

const getFestivityRankingName = (ranking: string): string => {
  switch (ranking) {
    case SURPRISE_BALL:
      return _('Surprise Ball');
    case CHRISTENING:
      return _('Christening');
    case DANCE:
      return _('Dance');
    case QUIET_GATHERING:
      return _('Quiet Gathering');
    default:
      return '';
  }
};

const viceCardValueText = (value: string | number): string => {
  switch (value) {
    case 'Q':
      return _('Queen');
    case 'J':
      return _('Jack');
    case 'R':
      return _('Rogue');
    case 'C':
      return _('Constable');
    default:
      return value + '';
  }
};

const cardsLog = (
  cards: ViceCardBase[]
): { log: string; args: Record<string, string> } => {
  const cardsLog = [];
  const cardsLogArgs = {};

  //  ${tkn_boldText_cardValue} of ${tkn_suit}

  cards.forEach((card, index) => {
    const viceCard: ViceCard = getViceCard(card);
    let log = '';
    // Value
    const key = 'tkn_boldText_cardValue' + index;
    log = log + '${' + key + '}';
    cardsLogArgs[key] = viceCardValueText(viceCard.displayValue);

    // Suit
    const keySuit = 'tkn_suit_' + index;
    log = log + '${' + keySuit + '}';
    cardsLogArgs[keySuit] = viceCard.suit;
    cardsLog.push(log);
  });

  return {
    log: cardsLog.join(' '),
    args: cardsLogArgs,
  };
};
