interface SuitCounterProps extends IconCounterProps {
  suit: Suit;
}

class SuitCounter extends IconCounter {
  constructor(props: SuitCounterProps) {
    super(props);

    this.setup(props);
  }

  setup({ suit }: SuitCounterProps) {
    this.iconElement.classList.add(`moho-suit`);
    this.iconElement.dataset.suit = suit;
  }
}
