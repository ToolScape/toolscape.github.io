import Boost from '../boost';

class MysticWill extends Boost {
  priority = 900;

  apply({ magicDps }) {
    if (magicDps) {
      const { effectiveAttack } = magicDps;
      magicDps.effectiveAttack = Math.floor(effectiveAttack * 1.05);
      return true;
    }
    return false;
  }

  get name() {
    return 'Mystic Will';
  }

  get description() {
    return '+5% Magical attack and defence';
  }
}

export default MysticWill;
