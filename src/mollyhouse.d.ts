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
    items: Record<string, MohoItemStatic>;
    sites: MohoSiteStaticData[];
    viceCards: Record<string, ViceCardStaticData>;
  };
  // Game specific
  communityJoy: number;
  currentWeek: number;
  deckCount: number;
  dice: number[];
  encounterTokens: MohoEncounterToken[];
  festivity: {
    runner: number;
    active: boolean;
    communityCards: ViceCardBase[];
  };
  gossipPileCount: number;
  itemsOnShops: MohoItemBase[];
  market: Record<string, ViceCardBase>;
  pawns: Record<string, MohoPawn>;
  safePile: ViceCardBase[];
  sites: Record<string, MohoSiteBase>;
  topOfSafePile: ViceCardBase | null;
}

interface MollyHousePlayerData extends BgaPlayer {
  festivity: ViceCardBase[];
  hand: ViceCardBase[];
  handCardCount: number;
  reputation: ViceCardBase[];
  cubes: Record<Suit, number>;
  items: MohoItemBase[];
  encounterTokens: MohoEncounterToken[];
}

type GameAlias = MollyHouse;
type GamedatasAlias = MollyHouseGamedatas;
type PlayerAlias = MohoPlayer;
type PlayerDataAlias = MollyHousePlayerData;

interface MohoEncounterToken extends GamePiece {
  type: 'Loyal' | 'Informer' | null;
  hidden: boolean;
}

interface MohoItemBase extends GamePiece {
  type: string;
}

interface MohoItemStatic extends GamePiece {
  name: string;
  text: string;
}

type MohoItem = MohoItemBase & MohoItemStatic;


interface MohoPawn extends GamePiece {
  color: string;
}

interface MohoSiteBase extends GamePiece {
  raidedOrDangerous: boolean;
  evidence: number;
}

interface MohoJoyMarker {
  id: string;
  color: string;
  hanged: boolean;
}

interface MohoSiteStaticData {
  address: string;
  name: string;
  suit: Suit | null;
  locationOrder: number;
}

type ViceCardType = 'desire' | 'treat' | 'molly';
type Suit = 'hearts' | 'cups' | 'fans' | 'pentacles';

interface ViceCardBase extends GamePiece {
  hidden: boolean;
  festivityValue: number;
}

interface ViceCardStaticData {
  type: ViceCardType;
  displayValue: number | string;
  suit: Suit;
  joy: number;
}

type ViceCard = ViceCardBase & ViceCardStaticData;
