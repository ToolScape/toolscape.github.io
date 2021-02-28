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

  get name() {
    return 'Piety';
  }

  get description() {
    return '+20% Attack, +23% Strength, +25% Defence';
  }
}

export default Piety;
