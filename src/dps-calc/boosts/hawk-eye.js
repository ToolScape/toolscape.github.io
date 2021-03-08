import Boost from '../boost';

class HawkEye extends Boost {
  priority = 900;

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack = Math.floor(effectiveAttack * 1.1);
      rangedDps.effectiveStrength = Math.floor(effectiveStrength * 1.1);
      return true;
    }
    return false;
  }

  get name() {
    return 'Hawk Eye';
  }

  get description() {
    return '+10% Ranged';
  }
}

export default HawkEye;
