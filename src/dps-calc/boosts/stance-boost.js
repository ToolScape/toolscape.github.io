import Boost from '../boost';

class StanceBoost extends Boost {
  priority = 8;

  apply({ meleeDps, rangedDps, magicDps }) {
    if (meleeDps) {
      switch (meleeDps.stance.attack_style) {
        case 'aggressive':
          meleeDps.effectiveStrength += 3;
          break;
        case 'accurate':
          meleeDps.effectiveAttack += 3;
          break;
        case 'controlled':
          meleeDps.effectiveStrength += 1;
          meleeDps.effectiveAttack += 1;
          break;
      }
    }
    if (rangedDps) {
      switch (rangedDps.stance.combat_style) {
        case 'accurate':
          rangedDps.effectiveStrength += 3;
          rangedDps.effectiveAttack += 3;
          break;
        case 'rapid':
        case 'flare':
          rangedDps.isRapid = true;
          break;
      }
    }
    if (magicDps) {
      switch (magicDps.stance.combat_style) {
        case 'accurate':
          magicDps.effectiveAttack += 3;
          break;
        case 'longrange':
          magicDps.effectiveAttack += 1;
          break;
      }
    }
  }

  get name() {
    return 'Stance boost';
  }
}

export default StanceBoost;
