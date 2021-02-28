import Boost from '../boost';

class BurstOfStrength extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 1.05);
    }
  }

  get name() {
    return 'Burst of Strength';
  }

  get description() {
    return '+5% Strength';
  }
}

export default BurstOfStrength;
