interface DrawTokenCounterProps extends IconCounterProps {}

class DrawTokenCounter extends IconCounter {
  constructor(props: DrawTokenCounterProps) {
    super(props);

    this.setup(props);
  }

  setup({}: DrawTokenCounterProps) {
    this.iconElement.classList.add(`moho-draw-token`);
  }
}
