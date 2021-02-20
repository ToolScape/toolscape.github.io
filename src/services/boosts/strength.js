import Boost from '../boost';

class Strength extends Boost {
  priority = 10;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 0.1) + 3;
    }
  }
}

export default Strength;
