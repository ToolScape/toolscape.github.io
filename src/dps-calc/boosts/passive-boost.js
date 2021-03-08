import Boost from '../boost';

class PassiveBoost extends Boost {
  priority = 800;

  show = false;

  apply({ meleeDps, rangedDps, magicDps }) {
    if (meleeDps || rangedDps) {
      const dpsInstance = meleeDps || rangedDps;
      dpsInstance.effectiveStrength += 8;
      dpsInstance.effectiveAttack += 8;
    }
    if (magicDps) {
      magicDps.effectiveAttack += 8;
    }
    return true;
  }

  get name() {
    return 'Passive boost';
  }
}

export default PassiveBoost;
