import Boost from '../boost';

class StrengthPotion extends Boost {
  priority = 10;

  categories = ['potion', 'strength'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength } = meleeDps;
      meleeDps.effectiveStrength += Math.floor(effectiveStrength * 0.1) + 3;
    }
  }

  get name() {
    return 'Strength potion';
  }
}

export default StrengthPotion;
