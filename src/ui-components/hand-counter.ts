interface HandCounterProps extends IconCounterProps {}

class HandCounter extends IconCounter {
  constructor(props: HandCounterProps) {
    super(props);

    this.setup(props);
  }

  setup(props: HandCounterProps) {
    this.iconElement.classList.add('moho-card-back');
  }
}
