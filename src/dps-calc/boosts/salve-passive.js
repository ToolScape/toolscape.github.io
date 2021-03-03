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
    if (meleeDps) {
      const bonus = this.enchanted ? 1.2 : 7 / 6;
      meleeDps.setBonus('undead', bonus);
    }
    if (this.imbued) {
      if (rangedDps) {
        const bonus = this.enchanted ? 1.2 : 7 / 6;
        rangedDps.setBonus('undead', bonus);
      }
      if (magicDps) {
        const bonus = this.enchanted ? 1.2 : 1.15;
        magicDps.setBonus('undead', bonus);
      }
    }
  }

  get name() {
    return 'Salve amulet';
  }
}

export default SalvePassive;
