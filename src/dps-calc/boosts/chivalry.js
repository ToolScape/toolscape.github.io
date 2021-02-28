import Boost from '../boost';

class Chivalry extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel, effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 1.18);
      meleeDps.effectiveAttackLevel = Math.floor(effectiveAttackLevel * 1.15);
    }
  }

  get name() {
    return 'Chivalry';
  }

  get description() {
    return '+15% Attack, +18% Strength, +20% Defence';
  }
}

export default Chivalry;
