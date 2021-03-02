import Boost from '../boost';

class Chivalry extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveStrength, effectiveAttack } = meleeDps;
      meleeDps.effectiveStrength = Math.floor(effectiveStrength * 1.18);
      meleeDps.effectiveAttack = Math.floor(effectiveAttack * 1.15);
    }
  }

  get name() {
    return 'Chivalry';
  }

  get description() {
    return '+15% Attack, +18% Strength, +20% Defence';
  }
}

export default Chivalry;
