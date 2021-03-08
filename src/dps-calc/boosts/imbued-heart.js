import Boost from '../boost';

class AttackPotion extends Boost {
  priority = 1000;

  categories = ['potion', 'magic'];

  apply({ magicDps }) {
    if (magicDps) {
      const { effectiveAttack, effectiveStrength } = magicDps;
      magicDps.effectiveAttack += Math.floor(effectiveAttack * 0.1) + 1;
      magicDps.effectiveStrength += Math.floor(effectiveStrength * 0.1) + 1;
      return true;
    }
    return false;
  }

  get name() {
    return 'Imbued heart';
  }
}

export default AttackPotion;
