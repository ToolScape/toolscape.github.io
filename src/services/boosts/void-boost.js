import { all } from 'core-js/fn/promise';
import Boost from '../boost';

class Void extends Boost {
  type = 'all'; // melee, ranged, mage, all

  elite = false;

  constructor(type, elite) {
    super();
    this.type = type;
    this.elite = elite;
  }

  apply({ meleeDps, rangedDps, mageDps }) {
    if (meleeDps) {
      const { strength, attack } = meleeDps.skills;
      if (this.type === 'all' || this.type === 'melee') {
        this.meleeDps.setSkill('strength', strength * 1.1);
        this.meleeDps.setSkill('attack', attack * 1.1);
      }
    }
    if (rangedDps) {
      throw new Error('Not Yet Implemented');
    }
    if (mageDps) {
      throw new Error('Not Yet Implemented');
    }
  }
}

export default Void;
