import Boost from '../boost';

class ViggorasChainmacePassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && meleeDps.settings.inWilderness) {
      meleeDps.addAccuracyModifier(this.name, 1.5);
      meleeDps.addDamageModifier(this.name, 1.5);
      return true;
    }
    return false;
  }

  get name() {
    return 'Viggora\'s chainmace passive';
  }
}

export default ViggorasChainmacePassive;
