import Boost from '../boost';

class BlackMaskPassive extends Boost {
  categories = ['equipment', 'attack', 'strength'];

  imbued = false;

  constructor(imbued) {
    super();
    this.imbued = imbued;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    if (meleeDps) {
      meleeDps.setBonus('slayer', 7 / 6);
    }
    if (this.imbued) {
      if (rangedDps) {
        throw new Error('Not Yet Implemented');
      }
      if (magicDps) {
        throw new Error('Not Yet Implemented');
      }
    }
  }

  get name() {
    return 'Black mask';
  }
}

export default BlackMaskPassive;
