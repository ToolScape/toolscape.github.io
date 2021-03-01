import Boost from '../boost';

class BgsSpec extends Boost {
  priority = 1;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps }) {
    if (meleeDps) {
      const { debuffedTarget } = meleeDps;
      debuffedTarget.defence_level = Math.max(0, debuffedTarget.defence_level - this.amount);
    }
  }

  get name() {
    return 'Bgs special';
  }
}

export default BgsSpec;
