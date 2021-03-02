import Boost from '../boost';

class ImprovedReflexes extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttack } = meleeDps;
      meleeDps.effectiveAttack = Math.floor(effectiveAttack * 1.1);
    }
  }

  get name() {
    return 'Improved Reflexes';
  }

  get description() {
    return '+10% Attack';
  }
}

export default ImprovedReflexes;
