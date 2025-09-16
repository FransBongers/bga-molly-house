const getGroupPosition = (
  top: number,
  left: number,
  index: number,
  rowSize: number
): AbsolutePosition => {
  const row = Math.floor(index / rowSize);
  const column = index % 4;
  return {
    top: top + 105 * row,
    left: left + 70 * column,
  };
};

const SITE_POSITIONS: Record<string, AbsolutePosition> = {
  [MOTHER_CLAPS]: { top: 98, left: 123 },
  [ST_PAULS_CATHEDRAL]: { top: 98, left: 363 },
  [NOBLE_STREET]: { top: 98, left: 557 },
  [MOORFIELDS]: { top: 98, left: 752 },
  [MISS_MUFFS]: { top: 98, left: 948 },
  [ROYAL_EXCHANGE]: { top: 291, left: 1088 },
  [LEADENHALL_STREET]: { top: 487, left: 1088 },
  [LONDON_BRIDGE]: { top: 678, left: 1088 },
  [SUKEY_BEVELLS]: { top: 991, left: 937 },
  [OLD_ROUND_COURT]: { top: 991, left: 732 },
  [CANNON_STREET]: { top: 991, left: 539 },
  [ST_JAMESS_PARK]: { top: 991, left: 345 },
  [JULIUS_CESAR_TAYLORS]: { top: 991, left: 160 },
  [COVENT_GARDEN_PIAZZA]: { top: 680, left: 83 },
  [DUKE_STREET]: { top: 486, left: 83 },
  [LINCOLNS_INN_BOGHOUSE]: { top: 288, left: 83 },
};

const DANGEROUS_CRUISING_MARKERS_POSITIONS: Record<string, AbsolutePosition> = {
  [ST_PAULS_CATHEDRAL]: { top: 60, left: 355 },
  [MOORFIELDS]: { top: 60, left: 745 },
  [ROYAL_EXCHANGE]: { top: 355, left: 1107 },
  [LONDON_BRIDGE]: { top: 746, left: 1107 },
  [OLD_ROUND_COURT]: { top: 1041, left: 745 },
  [ST_JAMESS_PARK]: { top: 1041, left: 355 },
  [COVENT_GARDEN_PIAZZA]: { top: 746, left: -6 },
  [LINCOLNS_INN_BOGHOUSE]: { top: 355, left: -6 },
};

const getPawnPosition = (location: string, index: number): AbsolutePosition => {
  let position = { top: 0, left: 0 };
  const { top, left } = SITE_POSITIONS[location] || { top: 0, left: 0 };

  position = getGroupPosition(top, left, index, 5);

  // position.top = position.top - 20 * offset;
  // position.left = position.left + 20 * offset;
  return position;
};

const SITE_SELECT_POSITIONS: Record<
  string,
  AbsolutePosition & { width: number; height: number }
> = {
  [MOTHER_CLAPS]: { top: 25, left: 28, width: 319, height: 253 },
  [ST_PAULS_CATHEDRAL]: { top: 25, left: 357, width: 185, height: 169 },
  [NOBLE_STREET]: { top: 25, left: 552, width: 185, height: 169 },
  [MOORFIELDS]: { top: 25, left: 747, width: 185, height: 169 },
  [MISS_MUFFS]: { top: 25, left: 942, width: 319, height: 253 },
  [ROYAL_EXCHANGE]: { top: 289, left: 1093, width: 168, height: 185 },
  [LEADENHALL_STREET]: { top: 485, left: 1093, width: 168, height: 185 },
  [LONDON_BRIDGE]: { top: 680, left: 1093, width: 168, height: 185 },
  [SUKEY_BEVELLS]: { top: 875, left: 943, width: 319, height: 253 },
  [OLD_ROUND_COURT]: { top: 959, left: 747, width: 185, height: 169 },
  [CANNON_STREET]: { top: 959, left: 552, width: 185, height: 169 },
  [ST_JAMESS_PARK]: { top: 959, left: 357, width: 185, height: 169 },
  [JULIUS_CESAR_TAYLORS]: { top: 875, left: 28, width: 319, height: 253 },
  [COVENT_GARDEN_PIAZZA]: { top: 680, left: 28, width: 168, height: 185 },
  [DUKE_STREET]: { top: 485, left: 28, width: 168, height: 185 },
  [LINCOLNS_INN_BOGHOUSE]: { top: 289, left: 28, width: 168, height: 185 },
};

const CURRENT_WEEK_MARKER_POSITIONS: Record<number, AbsolutePosition> = {
  1: { top: 613, left: 1359 },
  2: { top: 653, left: 1359 },
  3: { top: 693, left: 1359 },
  4: { top: 734, left: 1359 },
  5: { top: 774, left: 1359 },
};

const JOY_MARKER_POSITIONS: Record<number, AbsolutePosition> = {
  0: { top: 20, left: 1304 },
  1: { top: 20, left: 1354 },
  2: { top: 24, left: 1404 },
  3: { top: 71, left: 1417 },
  4: { top: 102, left: 1377 },
  5: { top: 105, left: 1325 },
  6: { top: 142, left: 1288 },
  7: { top: 184, left: 1319 },
  8: { top: 194, left: 1370 },
  9: { top: 178, left: 1419 },
  10: { top: 228, left: 1431 },
  11: { top: 274, left: 1412 },
  12: { top: 268, left: 1363 },
  13: { top: 258, left: 1314 },
  14: { top: 306, left: 1293 },
  15: { top: 356, left: 1289 },
  16: { top: 395, left: 1325 },
  17: { top: 359, left: 1363 },
  18: { top: 353, left: 1414 },
  19: { top: 401, left: 1428 },
  20: { top: 454, left: 1427 },
  21: { top: 451, left: 1375 },
  22: { top: 492, left: 1346 },
  23: { top: 485, left: 1296 },
  24: { top: 534, left: 1286 },
  25: { top: 585, left: 1304 },
  26: { top: 565, left: 1349 },
  27: { top: 551, left: 1391 },
  28: { top: 576, left: 1428 },
  29: { top: 620, left: 1431 },
  30: { top: 662, left: 1415 },
  31: { top: 706, left: 1423 },
  32: { top: 750, left: 1427 },
  33: { top: 795, left: 1433 },
  34: { top: 823, left: 1399 },
  35: { top: 825, left: 1353 },
  36: { top: 816, left: 1309 },
  37: { top: 778, left: 1286 },
  38: { top: 733, left: 1288 },
  39: { top: 688, left: 1293 },
};

const ENCOUNTER_TOKENS_CONFIG: Record<string, AbsolutePosition> = {
  [MOTHER_CLAPS]: { top: 200, left: 65 },
  [MISS_MUFFS]: { top: 200, left: 1090 },
  [SUKEY_BEVELLS]: { top: 875, left: 1090 },
  [JULIUS_CESAR_TAYLORS]: { top: 875, left: 65 },
};
