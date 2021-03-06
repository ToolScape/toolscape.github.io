import Boost from '../boost';

class SharpEye extends Boost {
  priority = 900;

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack = Math.floor(effectiveAttack * 1.05);
      rangedDps.effectiveStrength = Math.floor(effectiveStrength * 1.05);
      return true;
    }
    return false;
  }

  get name() {
    return 'Sharp Eye';
  }

  get description() {
    return '+5% Ranged';
  }
}

export default SharpEye;
