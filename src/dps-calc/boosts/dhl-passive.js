import Boost from '../boost';

class DhlPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isTargetDraconic(meleeDps.target)) {
      meleeDps.addAccuracyModifier(this.name, 1.2);
      meleeDps.addDamageModifier(this.name, 1.2);
    }
  }

  isTargetDraconic(target) {
    return target.attributes.includes('dragon');
  }

  get name() {
    return 'Dragon hunter lance passive';
  }
}

export default DhlPassive;
