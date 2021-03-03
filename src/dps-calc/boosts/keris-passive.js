import Boost from '../boost';

class KerisPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isTargetKalphite(meleeDps.target)) {
      meleeDps.addDamageModifier(this.name, 1.33);
    }
  }

  isTargetKalphite(target) {
    return target.attributes.includes('kalphite');
  }

  get name() {
    return 'Keris passive';
  }
}

export default KerisPassive;
