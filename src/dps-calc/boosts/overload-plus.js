import Boost from '../boost';

class OverloadPlus extends Boost {
  priority = 10;

  categories = ['potion', 'strength', 'attack', 'ranged', 'magic'];

  apply({ meleeDps, rangedDps, magicDps }) {
    const dpsInstance = meleeDps || rangedDps || magicDps;
    const { effectiveStrength, effectiveAttack } = dpsInstance;
    dpsInstance.effectiveStrength += Math.floor(effectiveStrength * 0.16) + 6;
    dpsInstance.effectiveAttack += Math.floor(effectiveAttack * 0.16) + 6;
  }

  get name() {
    return 'Overload (+)';
  }
}

export default OverloadPlus;
