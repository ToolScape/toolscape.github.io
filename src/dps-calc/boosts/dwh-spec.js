import Boost from '../boost';

class DwhSpec extends Boost {
  priority = 500;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const { debuffedTarget } = meleeDps || rangedDps || magicDps;
    debuffedTarget.defence_level = Math.ceil(debuffedTarget.defence_level * 0.7 ** this.amount);
  }

  get name() {
    return `Dragon warhammer special x${this.amount}`;
  }
}

export default DwhSpec;
