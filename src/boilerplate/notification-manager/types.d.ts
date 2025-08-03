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

interface NotifAddCardToSafePile extends NotifWithPlayerArgs {
  card: ViceCardBase;
}

interface NotifMovePawn extends NotifWithPlayerArgs {
  pawn: MohoPawn;
}

interface NotifPlacePawn extends NotifWithPlayerArgs {
  pawn: MohoPawn;
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
