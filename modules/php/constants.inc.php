<?php
require_once 'gameoptions.inc.php';

/**
 * Locations
 */
const DECK = 'deck';
const DISCARD = 'discard';
const SUPPLY = 'supply';

const PAWN = 'pawn';

/**
 * Game states
 */
const ST_PLAYER_SETUP_CHOOSE_CARD = 3;
const ST_PLAYER_TURN = 4;

/**
 * Game state names
 */
const PLAYER_SETUP_CHOOSE_CARD = 'PlayerSetupChooseCard';
const PLAYER_TURN = 'PlayerTurn';

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
