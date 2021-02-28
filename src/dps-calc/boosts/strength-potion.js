import Boost from '../boost';

class StrengthPotion extends Boost {
  priority = 10;

  categories = ['potion', 'strength'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel } = meleeDps;
      meleeDps.effectiveStrengthLevel += Math.floor(effectiveStrengthLevel * 0.1) + 3;
    }
  }

  get name() {
    return 'Strength potion';
  }
}

export default StrengthPotion;
