import Boost from '../boost';

class PassiveBoost extends Boost {
  priority = 7;

  apply({ meleeDps, rangedDps, mageDps }) {
    if (meleeDps) {
      meleeDps.effectiveStrengthLevel += 8;
      meleeDps.effectiveAttackLevel += 8;
    }
    if (rangedDps) {
      throw new Error('NYE');
    }
    if (mageDps) {
      throw new Error('NYE');
    }
  }
}

export default PassiveBoost;
