import Boost from '../boost';

class SuperAttackPotion extends Boost {
  priority = 10;

  categories = ['potion', 'attack'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveAttackLevel += Math.floor(effectiveAttackLevel * 0.15) + 5;
    }
  }

  get name() {
    return 'Super attack potion';
  }
}

export default SuperAttackPotion;
