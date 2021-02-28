import Boost from '../boost';

class IncredibleReflexes extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveAttackLevel = Math.floor(effectiveAttackLevel * 1.15);
    }
  }

  get name() {
    return 'Incredible Reflexes';
  }

  get description() {
    return '+15% Attack';
  }
}

export default IncredibleReflexes;
