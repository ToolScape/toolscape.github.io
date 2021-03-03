import Boost from '../boost';

class Rigour extends Boost {
  priority = 900;

  apply({ rangedDps }) {
    if (rangedDps) {
      const { effectiveAttack, effectiveStrength } = rangedDps;
      rangedDps.effectiveAttack = Math.floor(effectiveAttack * 1.2);
      rangedDps.effectiveStrength = Math.floor(effectiveStrength * 1.23);
    }
  }

  get name() {
    return 'Rigour';
  }

  get description() {
    return '+20% Ranged attack, +23% Ranged strength, +25% Defence';
  }
}

export default Rigour;
