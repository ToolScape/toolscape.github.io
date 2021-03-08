import Boost from '../boost';

class Piety extends Boost {
  priority = 900;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength, effectiveAttack } = meleeDps;
      meleeDps.effectiveStrength = Math.floor(effectiveStrength * 1.23);
      meleeDps.effectiveAttack = Math.floor(effectiveAttack * 1.2);
      return true;
    }
    return false;
  }

  get name() {
    return 'Piety';
  }

  get description() {
    return '+20% Attack, +23% Strength, +25% Defence';
  }
}

export default Piety;
