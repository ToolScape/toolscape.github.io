import Boost from '../boost';

class BgsSpec extends Boost {
  priority = 1;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const { debuffedTarget } = meleeDps || rangedDps || magicDps;
    debuffedTarget.defence_level = Math.max(0, debuffedTarget.defence_level - this.amount);
  }

  get name() {
    return 'Bgs special';
  }
}

export default BgsSpec;
