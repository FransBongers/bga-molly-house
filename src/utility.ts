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
