/**
 * Note: we need to keep player_name in snake case, because the framework uses
 * it to add player colors to the log messages.
 */

interface Log {
  log: string;
  args: Record<string, unknown>;
}

interface NotifWithPlayerArgs {
  playerId: number;
  player_name: string;
}

interface NotifPhase {
  week?: number;
  phase: string;
}

interface NotifAddCardFromGossipPile extends NotifWithPlayerArgs {}

interface NotifAddCardFromGossipPilePrivate extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToHand extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToGossipPile extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToReputation extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToSafePile {
  card: ViceCardBase;
}

interface NotifAddExcessCardsToGossip extends NotifWithPlayerArgs {
  number: number;
}

interface NotifAddExcessCardsToGossipPrivate extends NotifWithPlayerArgs {
  cards: ViceCardBase[];
}

interface NotifDealItemToShop {
  item: MohoItemBase;
}

interface NotifDiscardItem {
  item: MohoItemBase;
}

interface NotifDrawCards extends NotifWithPlayerArgs {
  number: number;
}

interface NotifDrawCardsPrivate extends NotifWithPlayerArgs {
  number: number;
  cards: ViceCardBase[];
}

interface NotifFestivityEnd {}

interface NotifFestivityPlayCard extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifEndOfWeekCreateViceDeck {
  cards: ViceCardBase[];
}

interface NotifEndOfWeekDiscardToSafePile {
  cards: ViceCardBase[];
  number: number;
}

interface NotifEndOfWeekGenerateEvidence {
  site: MohoSiteBase;
  number: number;
}

interface NotifEndOfWeekMollyHouseRaided {
  mollyHouse: MohoSiteBase;
  adjacentSites: MohoSiteBase[];
}

interface NotifFestivityRevealTopCardViceDeck {
  card: ViceCardBase;
}

interface NotifFestivityPhase {}

interface NotifFestivitySetRogueValue extends NotifWithPlayerArgs {
  card: ViceCardBase;
  value: number;
}

interface NotifFestivityWinningSet {
  cards: ViceCardBase[];
}

interface NotifGainCubes extends NotifWithPlayerArgs {
  suit: Suit;
  numberOfCubes: number;
}

interface NotifGainIndictment extends NotifWithPlayerArgs {
  majorOrMinor: 'major' | 'minor';
}

interface NotifGainIndictmentPrivate extends NotifWithPlayerArgs {
  majorOrMinor: 'major' | 'minor';
}

interface NotifLoseJoy extends NotifWithPlayerArgs {
  amount: number;
  total: number;
}

interface NotifLoseJoyCommunity {
  joyDecrease: number;
  joyTotal: number;
}

interface NotifMovePawn extends NotifWithPlayerArgs {
  pawn: MohoPawn;
  from: string;
}

interface NotifPlaceEncounterToken extends NotifWithPlayerArgs {
  siteId: string;
  token: MohoEncounterToken;
}

type NotifPlaceEncounterTokenPrivate = NotifPlaceEncounterToken;

interface NotifPlacePawn extends NotifWithPlayerArgs {
  pawn: MohoPawn;
}

interface NotifRefillMarket extends NotifWithPlayerArgs {
  movedCards: ViceCardBase[];
  addedCards: ViceCardBase[];
}

interface NotifRevealEncounterToken extends NotifWithPlayerArgs {
  siteId: string;
  token: MohoEncounterToken;
}

interface NotifRollDice extends NotifWithPlayerArgs {
  diceResults: number[];
}

interface NotifScoreBonusJoy extends NotifWithPlayerArgs {
  amount: number;
  total: number;
}

interface NotifScoreJoy extends NotifWithPlayerArgs {
  amount: number;
  total: number;
}

interface NotifScoreJoyCommunity {
  joyIncrease: number;
  joyTotal: number;
}

interface NotifSetupChooseCard extends NotifWithPlayerArgs {
  card: {
    id: string;
    hidden: boolean;
  };
}

interface NotifSetupChooseCardPrivate extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifSetupRevealCard extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifTakeCandelabra extends NotifWithPlayerArgs {}

interface NotifTakeItem extends NotifWithPlayerArgs {
  item: MohoItemBase;
}

interface NotifThrowFestivity extends NotifWithPlayerArgs {}
