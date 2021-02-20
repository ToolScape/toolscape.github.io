import Boost from '../boost';

class SuperStrength extends Boost {
  priority = 10;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 0.15) + 5;
    }
  }
}

export default SuperStrength;
