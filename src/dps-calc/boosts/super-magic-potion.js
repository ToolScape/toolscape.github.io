import Boost from '../boost';

class SuperMagicPotion extends Boost {
  priority = 10;

  categories = ['potion', 'magic'];

  apply({ magicDps }) {
    if (magicDps) {
      const { effectiveAttack, effectiveStrength } = magicDps;
      magicDps.effectiveStrength += Math.floor(effectiveStrength * 0.15) + 5;
      magicDps.effectiveAttack += Math.floor(effectiveAttack * 0.15) + 5;
    }
  }

  get name() {
    return 'Super magic potion';
  }
}

export default SuperMagicPotion;
