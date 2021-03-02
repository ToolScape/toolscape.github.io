import Boost from '../boost';

class DwhSpec extends Boost {
  priority = 3;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const { debuffedTarget } = meleeDps || rangedDps || magicDps;
    for (let i = 0; i < this.amount; i++) {
      debuffedTarget.defence_level = Math.ceil(debuffedTarget.defence_level * 0.7);
    }
  }

  get name() {
    return 'Dwh special';
  }
}

export default DwhSpec;
