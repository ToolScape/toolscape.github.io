import Boost from '../boost';

class IncredibleReflexes extends Boost {
  priority = 900;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttack } = meleeDps;
      meleeDps.effectiveAttack = Math.floor(effectiveAttack * 1.15);
      return true;
    }
    return false;
  }

  get name() {
    return 'Incredible Reflexes';
  }

  get description() {
    return '+15% Attack';
  }
}

export default IncredibleReflexes;
