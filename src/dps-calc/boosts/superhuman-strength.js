import Boost from '../boost';

class SuperhumanStrength extends Boost {
  priority = 900;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength } = meleeDps;
      meleeDps.effectiveStrength = Math.floor(effectiveStrength * 1.1);
      return true;
    }
    return false;
  }

  get name() {
    return 'Superhuman Strength';
  }

  get description() {
    return '+10% Strength';
  }
}

export default SuperhumanStrength;
