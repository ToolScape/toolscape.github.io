import Boost from '../boost';

class ImprovedReflexes extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveAttackLevel = Math.floor(effectiveAttackLevel * 1.1);
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
