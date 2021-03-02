import Boost from '../boost';

class Augury extends Boost {
  priority = 9;

  apply({ magicDps }) {
    if (magicDps) {
      const { effectiveAttack } = magicDps;
      magicDps.effectiveAttack = Math.floor(effectiveAttack * 1.25);
    }
  }

  get name() {
    return 'Augury';
  }

  get description() {
    return '+25% Magical attack and defence, +25% Defence';
  }
}

export default Augury;
