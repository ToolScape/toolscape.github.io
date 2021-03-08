import Boost from '../boost';

class SuperStrengthPotion extends Boost {
  priority = 1000;

  categories = ['potion', 'strength'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength } = meleeDps;
      meleeDps.effectiveStrength += Math.floor(effectiveStrength * 0.15) + 5;
      return true;
    }
    return false;
  }

  get name() {
    return 'Super strength potion';
  }
}

export default SuperStrengthPotion;
