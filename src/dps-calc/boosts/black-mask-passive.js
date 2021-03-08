import Boost from '../boost';

class BlackMaskPassive extends Boost {
  categories = ['equipment', 'attack', 'strength', 'magic', 'ranged'];

  imbued = false;

  constructor(imbued) {
    super();
    this.imbued = imbued;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const dpsInstance = meleeDps || rangedDps || magicDps;
    if (!dpsInstance.settings.onSlayerTask) return false;
    if (meleeDps) {
      meleeDps.setBonus('slayer', 7 / 6);
      return true;
    }
    if (this.imbued) {
      if (magicDps || rangedDps) {
        const magicOrRanged = rangedDps || magicDps;
        magicOrRanged.setBonus('slayer', 1.15);
        return true;
      }
    }
    return false;
  }

  get name() {
    return 'Black mask';
  }
}

export default BlackMaskPassive;
