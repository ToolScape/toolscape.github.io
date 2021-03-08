import Boost from '../boost';

class SalvePassive extends Boost {
  categories = ['equipment', 'attack', 'strength', 'magic', 'ranged'];

  enchanted = false;

  imbued = false;

  constructor(enchanted, imbued) {
    super();
    this.enchanted = enchanted;
    this.imbued = imbued;
  }

  apply({ meleeDps, rangedDps, magicDps }) {
    const instanceDps = meleeDps || rangedDps || magicDps;
    if (!this.isTargetUndead(instanceDps.target)) return false;
    if (meleeDps) {
      const bonus = this.enchanted ? 1.2 : 7 / 6;
      meleeDps.setBonus('undead', bonus);
      return true;
    }
    if (this.imbued) {
      if (rangedDps) {
        const bonus = this.enchanted ? 1.2 : 7 / 6;
        rangedDps.setBonus('undead', bonus);
        return true;
      }
      if (magicDps) {
        const bonus = this.enchanted ? 1.2 : 1.15;
        magicDps.setBonus('undead', bonus);
        return true;
      }
    }
    return false;
  }

  isTargetUndead(target) {
    return target.attributes.includes('undead');
  }

  get name() {
    return 'Salve amulet';
  }
}

export default SalvePassive;
