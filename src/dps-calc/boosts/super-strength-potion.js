import Boost from '../boost';

class SuperStrengthPotion extends Boost {
  priority = 10;

  categories = ['potion', 'strength'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel += Math.floor(effectiveStrengthLevel * 0.15) + 5;
    }
  }

  get name() {
    return 'Super strength potion';
  }
}

export default SuperStrengthPotion;
