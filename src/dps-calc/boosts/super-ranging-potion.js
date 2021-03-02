import Boost from '../boost';

class SuperRangingPotion extends Boost {
  priority = 10;

  categories = ['potion', 'ranged'];

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack += Math.floor(effectiveAttack * 0.15) + 5;
      rangedDps.effectiveStrength += Math.floor(effectiveStrength * 0.15) + 5;
    }
  }

  get name() {
    return 'Super ranging potion';
  }
}

export default SuperRangingPotion;
