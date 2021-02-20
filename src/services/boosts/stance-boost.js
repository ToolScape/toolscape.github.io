import Boost from '../boost';

class StanceBoost extends Boost {
  priority = 8;

  stance;

  constructor(stance) {
    super();
    this.stance = stance;
  }

  apply({ meleeDps, rangedDps, mageDps }) {
    if (meleeDps) {
      switch (this.stance.attack_style) {
        case 'aggressive':
          meleeDps.effectiveStrengthLevel += 3;
          break;
        case 'accurate':
          meleeDps.effectiveAttackLevel += 3;
          break;
        case 'controlled':
          meleeDps.effectiveStrengthLevel += 1;
          meleeDps.effectiveAttackLevel += 1;
          break;
      }
    }
    if (rangedDps) {
      throw new Error('NYE');
    }
    if (mageDps) {
      throw new Error('NYE');
    }
  }
}

export default StanceBoost;
