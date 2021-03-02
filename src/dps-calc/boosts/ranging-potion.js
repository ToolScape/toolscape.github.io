import Boost from '../boost';

class RangingPotion extends Boost {
  priority = 10;

  categories = ['potion', 'ranged'];

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack += Math.floor(effectiveAttack * 0.1) + 4;
      rangedDps.effectiveStrength += Math.floor(effectiveStrength * 0.1) + 4;
    }
  }

  get name() {
    return 'Ranging potion';
  }
}

export default RangingPotion;
