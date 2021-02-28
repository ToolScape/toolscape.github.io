import Boost from '../boost';

class StanceBoost extends Boost {
  priority = 8;

  apply({ meleeDps, rangedDps, magicDps }) {
    if (meleeDps) {
      switch (meleeDps.stance.attack_style) {
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
    if (magicDps) {
      throw new Error('NYE');
    }
  }

  get name() {
    return 'Stance boost';
  }
}

export default StanceBoost;
