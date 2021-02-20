import Boost from '../boost';

class BlackMask extends Boost {
  apply({ meleeDps, rangedDps, mageDps }) {
    if (meleeDps) {
      meleeDps.setBonus('slayer', 7 / 6);
    }
    if (rangedDps) {
      throw new Error('Not Yet Implemented');
    }
    if (mageDps) {
      throw new Error('Not Yet Implemented');
    }
  }
}

export default BlackMask;
