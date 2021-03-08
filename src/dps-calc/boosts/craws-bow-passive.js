import Boost from '../boost';

class CrawsBowPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'ranged'];

  apply({ rangedDps }) {
    if (rangedDps && rangedDps.settings.inWilderness) {
      rangedDps.addAccuracyModifier(this.name, 1.5);
      rangedDps.addDamageModifier(this.name, 1.5);
      return true;
    }
    return false;
  }

  get name() {
    return 'Craw\'s bow passive';
  }
}

export default CrawsBowPassive;
