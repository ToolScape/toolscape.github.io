import Boost from '../boost';

class OverloadPlus extends Boost {
  priority = 10;

  categories = ['potion', 'strength', 'attack', 'ranged', 'magic'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel, effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel += Math.floor(effectiveStrengthLevel * 0.16) + 6;
      meleeDps.effectiveAttackLevel += Math.floor(effectiveAttackLevel * 0.16) + 6;
    }
  }

  get name() {
    return 'Overload (+)';
  }
}

export default OverloadPlus;
