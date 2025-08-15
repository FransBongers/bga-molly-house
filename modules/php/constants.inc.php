<?php
require_once 'gameoptions.inc.php';

/**
 * Locations
 */
const DECK = 'deck';
const DISCARD = 'discard';
const SUPPLY = 'supply';

const PAWN = 'pawn';
const COMMUNITY = 'community';

/**
 * Dice
 */
const SINGLE_BOOT = 'singleBoot';
const DOUBLE_BOOT = 'doubleBoot';
const MARKET_DISCARD = 'marketDiscard';

const DIE_FACES = [
  SINGLE_BOOT,
  SINGLE_BOOT,
  DOUBLE_BOOT,
  MARKET_DISCARD,
  SINGLE_BOOT,
  DOUBLE_BOOT,
];

/**
 * Game states
 */
const ST_PLAYER_SETUP_CHOOSE_CARD = 3;
const ST_TAKE_ACTION = 4;
const ST_INDULGE = 5;
const ST_LIE_LOW = 6;
const ST_ACCUSE = 7;
const ST_CRUISE = 8;
const ST_SHOP = 9;
const ST_THROW_FESTIVITY = 10;
const ST_ROLL_DICE = 11;
const ST_RESOLVE_MARKET_DISCARD = 12;
const ST_MOVE_PAWN = 13;
const ST_REFILL_MARKET = 14;
const ST_CHECK_HAND_SIZE = 15;
const ST_ADD_EXCESS_CARDS_TO_GOSSIP = 16;
const ST_FESTIVITY_SETUP_ROUND = 17;
const ST_FESTIVITY_REVEAL_TOP_CARD_VICE_DECK = 18;
const ST_FESTIVITY_PLAY_CARD = 19;
const ST_FESTIVITY_CLEANUP = 20;
const ST_FESTIVITY_DETERMINE_WINNING_SET = 21;
const ST_FESTIVITY_SCORE_JOY = 22;
const ST_FESTIVITY_SCORE_BONUS = 23;
const ST_FESTIVITY_GENERATE_GOSSIP = 24;
const ST_FESTIVITY_SELECT_WINNING_SET = 25;
const ST_LOG_STEP = 26;
const ST_FESTIVITY_CHOOSE_NEXT_FOILED_THREAT = 27;
const ST_FESTIVITY_TAKE_MATCHING_CUBES = 28;
const ST_FESTIVITY_FOIL_THREAT = 29;
const ST_FESTIVITY_FOIL_THREAT_ADD_TO_SAFE_PILE = 30;

/**
 * Game state names
 */
const PLAYER_SETUP_CHOOSE_CARD = 'PlayerSetupChooseCard';
const TAKE_ACTION = 'TakeAction';
const INDULGE = 'Indulge';
const LIE_LOW = 'LieLow';
const ACCUSE = 'Accuse';
const CRUISE = 'Cruise';
const SHOP = 'Shop';
const THROW_FESTIVITY = 'ThrowFestivity';
const ROLL_DICE = 'RollDice';
const RESOLVE_MARKET_DISCARD = 'ResolveMarketDiscard';
const MOVE_PAWN = 'MovePawn';
const REFILL_MARKET = 'RefillMarket';
const CHECK_HAND_SIZE = 'CheckHandSize';
const ADD_EXCESS_CARDS_TO_GOSSIP = 'AddExcessCardsToGossip';
const FESTIVITY_SETUP_ROUND = 'FestivitySetupRound';
const FESTIVITY_REVEAL_TOP_CARD_VICE_DECK = 'FestivityRevealTopCardViceDeck';
const FESTIVITY_PLAY_CARD = 'FestivityPlayCard';
const FESTIVITY_CLEANUP = 'FestivityCleanup';
const FESTIVITY_DETERMINE_WINNING_SET = 'FestivityDetermineWinningSet';
const FESTIVITY_SCORE_JOY = 'FestivityScoreJoy';
const FESTIVITY_SCORE_BONUS = 'FestivityScoreBonus';
const FESTIVITY_GENERATE_GOSSIP = 'FestivityGenerateGossip';
const FESTIVITY_SELECT_WINNING_SET = 'FestivitySelectWinningSet';
const LOG_STEP = 'LogStep';
const FESTIVITY_CHOOSE_NEXT_FOILED_THREAT = 'FestivityChooseNextFoiledThreat';
const FESTIVITY_TAKE_MATCHING_CUBES = 'FestivityTakeMatchingCubes';
const FESTIVITY_FOIL_THREAT = 'FestivityFoilThreat';
const FESTIVITY_FOIL_THREAT_ADD_TO_SAFE_PILE = 'FestivityFoilThreatAddToSafePile';

/**
 * Card types
 */
const DESIRE = 'desire';
const THREAT = 'threat';
const MOLLY = 'molly';

const CONVICTED = 'convicted';
const MAJOR = 'major';
const MINOR = 'minor';

/**
 * Suits
 */
const CUPS = 'cups';
const PENTACLES = 'pentacles';
const FANS = 'fans';
const HEARTS = 'hearts';

/**
 * Market locations
 */
const MARKET_0 = 'market_0';
const MARKET_1 = 'market_1';
const MARKET_2 = 'market_2';
const MARKET_3 = 'market_3';

const MARKET_SPOTS = [
  MARKET_0,
  MARKET_1,
  MARKET_2,
  MARKET_3,
];

const GOSSIP_PILE = 'gossipPile';
const SAFE_PILE = 'safePile';

/**
 * Sites
 */
const MOTHER_CLAPS = 'MotherClaps';
const ST_PAULS_CATHEDRAL = 'StPaulsCathedral';
const NOBLE_STREET = 'NobleStreet';
const MOORFIELDS = 'Moorfields';
const MISS_MUFFS = 'MissMuffs';
const ROYAL_EXCHANGE = 'RoyalExchange';
const LEADENHALL_STREET = 'LeadenhallStreet';
const LONDON_BRIDGE = 'LondonBridge';
const SUKEY_BEVELLS = 'SukeyBevells';
const OLD_ROUND_COURT = 'OldRoundCourt';
const CANNON_STREET = 'CannonStreet';
const ST_JAMESS_PARK = 'StJamessPark';
const JULIUS_CESAR_TAYLORS = 'JuliusCesarTaylors';
const COVENT_GARDEN_PIAZZA  = 'CoventGardenPiazza';
const DUKE_STREET = 'DukeStreet';
const LINCOLNS_INN_BOGHOUSE = 'LincolnsInnBoghouse';

// List of sites in order of appearance on the board
const SITES = [
  MOTHER_CLAPS,
  ST_PAULS_CATHEDRAL,
  NOBLE_STREET,
  MOORFIELDS,
  MISS_MUFFS,
  ROYAL_EXCHANGE,
  LEADENHALL_STREET,
  LONDON_BRIDGE,
  SUKEY_BEVELLS,
  OLD_ROUND_COURT,
  CANNON_STREET,
  ST_JAMESS_PARK,
  JULIUS_CESAR_TAYLORS,
  COVENT_GARDEN_PIAZZA,
  DUKE_STREET,
  LINCOLNS_INN_BOGHOUSE,
];

const MOLLY_HOUSES = [
  MOTHER_CLAPS,
  MISS_MUFFS,
  SUKEY_BEVELLS,
  JULIUS_CESAR_TAYLORS,
];

const SUIT_MOLLY_HOUSE_MAP = [
  PENTACLES => MOTHER_CLAPS,
  FANS => MISS_MUFFS,
  HEARTS => SUKEY_BEVELLS,
  CUPS => JULIUS_CESAR_TAYLORS,
];

const SHOP_SITES = [
  NOBLE_STREET,
  LEADENHALL_STREET,
  CANNON_STREET,
  DUKE_STREET,
];

/**
 * Items
 */
const NEWSPAPER_NOTICE = 'NewspaperNotice';
const BRIBE = 'Bribe';
const VIOLIN = 'Violin';
const DOMINO = 'Domino';
const BOTTLE_OF_GIN = 'BottleOfGin';
const DRESS_OF_CUPS = 'DressOfCups';
const DRESS_OF_PENTACLES = 'DressOfPentacles';
const DRESS_OF_FANS = 'DressOfFans';
const DRESS_OF_HEARTS = 'DressOfHearts';

const ITEM_DISTRIBUTIION = [
  NEWSPAPER_NOTICE => 3,
  BRIBE => 3,
  VIOLIN => 3,
  DOMINO => 3,
  BOTTLE_OF_GIN => 4,
  DRESS_OF_CUPS => 1,
  DRESS_OF_PENTACLES => 1,
  DRESS_OF_FANS => 1,
  DRESS_OF_HEARTS => 1,
];

const SURPRISE_BALL = 'SurpriseBall';
const CHRISTENING = 'Christening';
const DANCE = 'Dance';
const QUIET_GATHERING = 'QuietGathering';

const FESTIVITIES = [
  SURPRISE_BALL,
  CHRISTENING,
  DANCE,
  QUIET_GATHERING,
];

const RED = 'red'; // the other colors are also player colors

const SUIT_COLOR_MAP = [
  CUPS => BLUE,
  PENTACLES => YELLOW,
  FANS => GREEN,
  HEARTS => RED,
];