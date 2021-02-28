import Boost from '../boost';

class AttackPotion extends Boost {
  priority = 10;

  categories = ['potion', 'attack'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveAttackLevel += Math.floor(effectiveAttackLevel * 0.1) + 3;
    }
  }

  get name() {
    return 'Attack potion';
  }
}

export default AttackPotion;
