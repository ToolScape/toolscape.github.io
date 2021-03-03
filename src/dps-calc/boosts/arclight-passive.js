import Boost from '../boost';

class ArclightPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isTargetDemon(meleeDps.target)) {
      meleeDps.addAccuracyModifier(this.name, 1.7);
      meleeDps.addDamageModifier(this.name, 1.7);
    }
  }

  isTargetDemon(target) {
    return target.attributes.includes('demon');
  }

  get name() {
    return 'Arclight passive';
  }
}

export default ArclightPassive;
