import Boost from '../boost';

class BgsSpec extends Boost {
  priority = 100;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const { debuffedTarget } = meleeDps || rangedDps || magicDps;
    const reductionOrder = ['defence_level', 'strength_level', 'attack_level', 'magic_level', 'ranged_level'];
    let reductionIndex = 0;
    let currentAmount = this.amount;
    while (currentAmount > 0 || reductionIndex < reductionIndex.length) {
      const stat = reductionOrder[reductionIndex];
      let statLevel = debuffedTarget[stat];
      if (currentAmount > statLevel) {
        currentAmount -= statLevel;
        statLevel = 0;
      } else {
        statLevel -= currentAmount;
        currentAmount = 0;
      }
      debuffedTarget[stat] = statLevel;
      reductionIndex++;
    }
  }

  get name() {
    return `Bandos godsword special (${this.amount} dmg)`;
  }
}

export default BgsSpec;
