import Boost from '../boost';

class UltimateStrength extends Boost {
  priority = 900;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength } = meleeDps;
      meleeDps.effectiveStrength = Math.floor(effectiveStrength * 1.15);
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
