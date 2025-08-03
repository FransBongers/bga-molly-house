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
  staticData: {
    viceCards: Record<string, ViceCardStaticData>;
  };
  // Game specific
  deckCount: number;
  gossipPileCount: number;
  market: ViceCard[];
  pawns: Record<string,MohoPawn>;
}

interface MollyHousePlayerData extends BgaPlayer {
  hand: ViceCard[];
  reputation: ViceCard[];
}

type GameAlias = MollyHouse;
type GamedatasAlias = MollyHouseGamedatas;
type PlayerAlias = MohoPlayer;
type PlayerDataAlias = MollyHousePlayerData;

interface MohoPawn extends GamePiece {
  color: string;
}

type ViceCardType = 'desire' | 'treat' | 'molly';
type Suit = 'hearts' | 'cups' | 'fans' | 'pentacles';

interface ViceCardBase extends GamePiece {
  hidden: boolean;
}

interface ViceCardStaticData {
  type: ViceCardType;
  value: number | string;
  suit: Suit;
  joy: number;
}

type ViceCard = ViceCardBase & ViceCardStaticData;