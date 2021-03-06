import Boost from '../boost';

class MysticLore extends Boost {
  priority = 900;

  apply({ magicDps }) {
    if (magicDps) {
      const { effectiveAttack } = magicDps;
      magicDps.effectiveAttack = Math.floor(effectiveAttack * 1.1);
      return true;
    }
    return false;
  }

  get name() {
    return 'Mystic Lore';
  }

  get description() {
    return '+10% Magical attack and defence';
  }
}

export default MysticLore;
