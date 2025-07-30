// TODO: split in framework & game specicf

interface AddButtonProps {
  id: string;
  text: string;
  callback: () => void;
  extraClasses?: string;
}

interface AddActionButtonProps extends AddButtonProps {
  color?: 'blue' | 'gray' | 'red' | 'none';
}

interface State {
  onEnteringState: (args: any) => void;
  onLeavingState: () => void;
}

interface CommonStateArgs {
  optionalAction: boolean;
  previousEngineChoices: number;
  previousSteps: number[];
}

interface GamePiece {
  id: string;
  location: string;
  state: number;
}

interface MollyHouseGamedatas extends Gamedatas {
  // Default
  canceledNotifIds: string[];
  gameOptions: {};
  playerOrder: number[];
  players: Record<number, MollyHousePlayerData>;
  staticData: {};
}

interface MollyHousePlayerData extends BgaPlayer {}

type GameAlias = MollyHouse;
type GamedatasAlias = MollyHouseGamedatas;
type PlayerAlias = MohoPlayer;