import Boost from '../boost';

class SuperAttackPotion extends Boost {
  priority = 1000;

  categories = ['potion', 'attack'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttack } = meleeDps;
      meleeDps.effectiveAttack += Math.floor(effectiveAttack * 0.15) + 5;
      return true;
    }
    return false;
  }

  get name() {
    return 'Super attack potion';
  }
}

export default SuperAttackPotion;
