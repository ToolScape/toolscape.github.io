import Boost from '../boost';

class MagicPotion extends Boost {
  priority = 1000;

  categories = ['potion', 'magic'];

  apply({ magicDps }) {
    if (magicDps) {
      magicDps.effectiveStrength += 4;
      magicDps.effectiveAttack += 4;
      return true;
    }
    return false;
  }

  get name() {
    return 'Magic potion';
  }
}

export default MagicPotion;
