import Boost from '../boost';

class ScytheOfViturPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isLarge(meleeDps.target)) {
      meleeDps.addAverageDamageModifier(this.name, 1.75);
      return true;
    }
    return false;
  }

  isLarge(target) {
    return target.size > 1;
  }

  get name() {
    return 'Scythe of vitur passive';
  }
}

export default ScytheOfViturPassive;
