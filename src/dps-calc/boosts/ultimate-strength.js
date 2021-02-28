import Boost from '../boost';

class UltimateStrength extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 1.15);
    }
  }

  get name() {
    return 'Ultimate Strength';
  }

  get description() {
    return '+15% Strength';
  }
}

export default UltimateStrength;
