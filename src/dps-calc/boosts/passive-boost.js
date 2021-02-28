import Boost from '../boost';

class PassiveBoost extends Boost {
  priority = 8;

  apply({ meleeDps, rangedDps, magicDps }) {
    if (meleeDps) {
      meleeDps.effectiveStrengthLevel += 8;
      meleeDps.effectiveAttackLevel += 8;
    }
    if (rangedDps) {
      throw new Error('NYE');
    }
    if (magicDps) {
      throw new Error('NYE');
    }
  }

  get name() {
    return 'Passive boost';
  }
}

export default PassiveBoost;
