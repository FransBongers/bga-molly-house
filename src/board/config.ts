
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
  [ROYAL_EXCHANGE]: { top: 291, left:  1088},
  [LEADENHALL_STREET]: { top: 487, left: 1088 },
  [LONDON_BRIDGE]: { top: 678, left: 1088 },
  [SUKEY_BEVELLS]: { top: 991, left: 937 },
  [OLD_ROUND_COURT]: { top: 991, left: 732 },
  [CANNON_STREET]: { top: 991, left: 539 },
  [ST_JAMESS_PARK]: { top: 991, left: 345 },
  [JULIUS_CESAR_TAYLORS]: { top: 991, left: 119 },
  [COVENT_GARDEN_PIAZZA]: { top: 680, left: 83 },
  [DUKE_STREET]: { top: 486, left: 83 },
  [LINCOLNS_INN_BOGHOUSE]: { top: 288, left: 83 },
}

const getPawnPosition = (location: string, index: number): AbsolutePosition => {

  let position = { top: 0, left: 0 };
  const {top, left} = SITE_POSITIONS[location] || { top: 0, left: 0 };
  switch (location) {
    //   case WEST_INDIAN:
    //     position = WEST_INDIAN_POSITIONS[positionIndex];
    //     break;
    //   case SOUTH_INDIAN:
    //     position = SOUTH_INDIAN_POSITIONS[positionIndex];
    //     break;
    //   case EAST_INDIAN:
    //     position = EAST_INDIAN_POSITIONS[positionIndex];
    //     break;
    default:
      position = getGroupPosition(top, left, index, 5);
      break;
  }

  // position.top = position.top - 20 * offset;
  // position.left = position.left + 20 * offset;
  return position;
};