import Boost from '../boost';

class DhcbPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'ranged'];

  apply({ rangedDps }) {
    if (rangedDps && this.isTargetDraconic(rangedDps.target)) {
      rangedDps.addAccuracyModifier(this.name, 1.3);
      rangedDps.addDamageModifier(this.name, 1.3);
      return true;
    }
    return false;
  }

  isTargetDraconic(target) {
    return target.attributes.includes('dragon');
  }

  get name() {
    return 'Dragon hunter crossbow passive';
  }
}

export default DhcbPassive;
