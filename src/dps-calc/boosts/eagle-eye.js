import Boost from '../boost';

class EagleEye extends Boost {
  priority = 900;

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack = Math.floor(effectiveAttack * 1.15);
      rangedDps.effectiveStrength = Math.floor(effectiveStrength * 1.15);
      return true;
    }
    return false;
  }

  get name() {
    return 'Eagle Eye';
  }

  get description() {
    return '+15% Ranged';
  }
}

export default EagleEye;
