import Boost from '../boost';

class EagleEye extends Boost {
  priority = 9;

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack = Math.floor(effectiveAttack * 1.15);
      rangedDps.effectiveStrength = Math.floor(effectiveStrength * 1.15);
    }
  }

  get name() {
    return 'Eagle Eye';
  }

  get description() {
    return '+15% Ranged';
  }
}

export default EagleEye;
