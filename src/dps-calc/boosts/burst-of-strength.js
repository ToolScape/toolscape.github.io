import Boost from '../boost';

class BurstOfStrength extends Boost {
  priority = 900;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength } = meleeDps;
      meleeDps.effectiveStrength = Math.floor(effectiveStrength * 1.05);
      return true;
    }
    return false;
  }

  get name() {
    return 'Burst of Strength';
  }

  get description() {
    return '+5% Strength';
  }
}

export default BurstOfStrength;
