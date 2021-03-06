import Boost from '../boost';

class ArclightSpec extends Boost {
  priority = 499;

  categories = ['special'];

  amount = 0;

  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const { debuffedTarget, target } = meleeDps || rangedDps || magicDps;
    const percentage = (this.isTargetDemon(target) ? 0.1 : 0.05);
    const defenceReduction = target.defence_level * Math.max((percentage * this.amount), 0);
    const strengthReduction = target.strength_level * Math.max((percentage * this.amount), 0);
    const attackReduction = target.attack_level * Math.max((percentage * this.amount), 0);

    debuffedTarget.defence_level = Math.max(0,
      Math.ceil(debuffedTarget.defence_level - defenceReduction));
    debuffedTarget.strength_level = Math.max(0,
      Math.ceil(debuffedTarget.strength_level - strengthReduction));
    debuffedTarget.attack_level = Math.max(0,
      Math.ceil(debuffedTarget.attack_level - attackReduction));
  }

  isTargetDemon(target) {
    return target.attributes.includes('demon');
  }

  get name() {
    return `Arclight special x${this.amount}`;
  }
}

export default ArclightSpec;
