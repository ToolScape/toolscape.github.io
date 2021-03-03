import Boost from '../boost';

class ThammaronsSceptrePassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'magic'];

  apply({ magicDps }) {
    if (magicDps && magicDps.settings.inWilderness) {
      magicDps.addAccuracyModifier(this.name, 2);
      magicDps.bonusMagicDamage += 25;
    }
  }

  get name() {
    return 'Thammaron\'s sceptre passive';
  }
}

export default ThammaronsSceptrePassive;
