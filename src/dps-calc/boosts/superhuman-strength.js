import Boost from '../boost';

class SuperhumanStrength extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 1.1);
    }
  }

  get name() {
    return 'Superhuman Strength';
  }

  get description() {
    return '+10% Strength';
  }
}

export default SuperhumanStrength;
