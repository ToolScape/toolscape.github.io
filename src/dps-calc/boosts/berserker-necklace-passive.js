import Boost from '../boost';
import Utils from '../../services/utils';

class BerserkerNecklacePassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isObsidianMeleeWeapon(meleeDps.equipment)) {
      meleeDps.addDamageModifier(this.name, 1.2);
      return true;
    }
    return false;
  }

  isObsidianMeleeWeapon(equipment) {
    const obsidianWeaponIds = [6523, 6525, 6527, 6528];
    return Utils.hasAnyEquipped(equipment, obsidianWeaponIds);
  }

  get name() {
    return 'Berserker necklace passive';
  }
}

export default BerserkerNecklacePassive;
