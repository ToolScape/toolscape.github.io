import Boost from '../boost';

class Void extends Boost {
  priority = 6;

  type = 'all'; // melee, ranged, mage, all

  elite = false;

  constructor(type, elite) {
    super();
    this.type = type;
    this.elite = elite;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    if (meleeDps) {
      const { effectiveStrengthLevel, effectiveAttackLevel } = meleeDps;
      if (this.type === 'all' || this.type === 'melee') {
        meleeDps.effectiveStrengthLevel = Math.floor(effectiveStrengthLevel * 1.1);
        meleeDps.effectiveAttackLevel = Math.floor(effectiveAttackLevel * 1.1);
      }
    }
    if (rangedDps) {
      throw new Error('Not Yet Implemented');
    }
    if (magicDps) {
      throw new Error('Not Yet Implemented');
    }
  }

  get name() {
    return 'Void set';
  }
}

export default Void;
