import Boost from '../boost';

class TbowBoost extends Boost {
  priority = 100;

  apply({ rangedDps }) {
    if (rangedDps) {
      const insideChambers = false;
      const targetMagicLevel = Math.min(
        rangedDps.debuffedTarget.magic_level,
        insideChambers ? 350 : 250,
      );

      const accuracyModifier = 140
        + (10 * 3 * targetMagicLevel / 10 - 10) / 100
        - (((3 * targetMagicLevel / 10) - 100) ** 2) / 100;
      rangedDps.addAccuracyModifier(this.name, Math.min(accuracyModifier, 140) / 100);

      const damageModifier = 250
        + (10 * 3 * targetMagicLevel / 10 - 14) / 100
        - (((3 * targetMagicLevel / 10) - 140) ** 2) / 100;
      rangedDps.addDamageModifier(this.name, Math.min(damageModifier, 250) / 100);
    }
  }

  get name() {
    return 'Twisted bow boost';
  }
}

export default TbowBoost;
