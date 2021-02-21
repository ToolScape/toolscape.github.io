import Boost from '../boost';

class Piety extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel, effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 1.23);
      meleeDps.effectiveAttackLevel = Math.floor(effectiveAttackLevel * 1.2);
    }
  }
}

export default Piety;
