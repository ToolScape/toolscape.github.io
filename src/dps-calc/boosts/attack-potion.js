import Boost from '../boost';

class AttackPotion extends Boost {
  priority = 1000;

  categories = ['potion', 'attack'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttack } = meleeDps;
      meleeDps.effectiveAttack += Math.floor(effectiveAttack * 0.1) + 3;
    }
  }

  get name() {
    return 'Attack potion';
  }
}

export default AttackPotion;
