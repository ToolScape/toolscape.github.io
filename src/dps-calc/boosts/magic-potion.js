import Boost from '../boost';

class MagicPotion extends Boost {
  priority = 1000;

  categories = ['potion', 'magic'];

  apply({ magicDps }) {
    if (magicDps) {
      magicDps.effectiveStrength += 4;
      magicDps.effectiveAttack += 4;
    }
  }

  get name() {
    return 'Magic potion';
  }
}

export default MagicPotion;
