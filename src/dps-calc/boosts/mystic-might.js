import Boost from '../boost';

class MysticMight extends Boost {
  priority = 900;

  apply({ magicDps }) {
    if (magicDps) {
      const { effectiveAttack } = magicDps;
      magicDps.effectiveAttack = Math.floor(effectiveAttack * 1.15);
      return true;
    }
    return false;
  }

  get name() {
    return 'Mystic Might';
  }

  get description() {
    return '+15% Magical attack and defence';
  }
}

export default MysticMight;
