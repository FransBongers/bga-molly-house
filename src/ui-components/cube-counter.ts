interface CubeCounterProps extends IconCounterProps {
  color: 'blue' | 'green' | 'red' | 'yellow';
}

class CubeCounter extends IconCounter {
  constructor(props: CubeCounterProps) {
    super(props);

    this.setup(props);
  }

  setup({ color }: CubeCounterProps) {
    this.iconElement.classList.add(`moho-cube`);
    this.iconElement.dataset.color = color;
  }
}
