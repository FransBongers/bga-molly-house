const getViceCard = (base: ViceCardBase): ViceCard => {
  return {
    ...base,
    ...StaticData.get().viceCard(base.id),
  };
};

const getViceCardValueText = (value: string | number): string => {
  switch (value) {
    case 'Q':
      return _('Queen');
    case 'J':
      return _('Jack');
    case 'R':
      return _('Rogue');
    case 'C':
      return _('Constable');
    default:
      return String(value);
  }
};

const getDice = (diceValues: number[]): BgaDie[] => {
  const dice = diceValues.map((faceIndex, id) => ({
    id,
    face: faceIndex + 1,
    type: 0,
  }));
  return dice;
};
