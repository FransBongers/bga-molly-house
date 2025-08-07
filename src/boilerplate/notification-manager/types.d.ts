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

interface NotifAddCardToHand extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToGossipPile extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToReputation extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddCardToSafePile extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifAddExcessCardsToGossip extends NotifWithPlayerArgs {
  number: number;
}

interface NotifAddExcessCardsToGossipPrivate extends NotifWithPlayerArgs {
  cards: ViceCardBase[];
}

interface NotifDrawCards extends NotifWithPlayerArgs {
  amount: number;
}


interface NotifDrawCardsPrivate extends NotifWithPlayerArgs {
  amount: number;
  cards: ViceCardBase[];
}

interface NotifGainCubes extends NotifWithPlayerArgs {
  suit: Suit;
  numberOfCubes: number;
}

interface NotifMovePawn extends NotifWithPlayerArgs {
  pawn: MohoPawn;
  from: string;
}

interface NotifPlacePawn extends NotifWithPlayerArgs {
  pawn: MohoPawn;
}

interface NotifRefillMarket extends NotifWithPlayerArgs {
  cards: ViceCardBase[];
}

interface NotifRollDice extends NotifWithPlayerArgs {
  diceResults: number[];
}

interface NotifScoreBonusJoy extends NotifWithPlayerArgs {
  amount: number;
}

interface NotifScoreJoy extends NotifWithPlayerArgs {
  amount: number;
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

interface NotifStartOfTurn extends NotifWithPlayerArgs {}
