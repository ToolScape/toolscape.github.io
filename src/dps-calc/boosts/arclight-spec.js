import Boost from '../boost';

class ArclightSpec extends Boost {
  priority = 2;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const { debuffedTarget, target } = meleeDps || rangedDps || magicDps;
    for (let i = 0; i < this.amount; i++) {
      const reduction = target.defence_level * (this.isTargetDemon(target) ? 0.1 : 0.05);
      debuffedTarget.defence_level = Math.max(0,
        Math.ceil(debuffedTarget.defence_level - reduction));
    }
  }

  isTargetDemon(target) {
    return target.attributes.includes('demon');
  }

  get name() {
    return 'Arclight special';
  }
}

export default ArclightSpec;
