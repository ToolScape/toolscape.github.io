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
      const { effectiveStrength, effectiveAttack } = meleeDps;
      if (this.type === 'all' || this.type === 'melee') {
        meleeDps.effectiveStrength = Math.floor(effectiveStrength * 1.1);
        meleeDps.effectiveAttack = Math.floor(effectiveAttack * 1.1);
      }
    }
    if (rangedDps) {
      const { effectiveStrength, effectiveAttack } = rangedDps;
      if (this.type === 'all' || this.type === 'ranged') {
        const strengthMulti = this.elite ? 1.125 : 1.1;
        rangedDps.effectiveStrength = Math.floor(effectiveStrength * strengthMulti);
        rangedDps.effectiveAttack = Math.floor(effectiveAttack * 1.1);
      }
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
