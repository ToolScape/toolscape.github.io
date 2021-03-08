import Boost from '../boost';
import Utils from '../../services/utils';

class ObsidianArmourPassive extends Boost {
  priority = 110;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isObsidianWeapon(meleeDps.equipment)) {
      meleeDps.addAccuracyModifier(this.name, 1.1);
      meleeDps.addDamageModifier(this.name, 1.1);
      return true;
    }
    return false;
  }

  isObsidianWeapon(equipment) {
    const obsidianWeaponIds = [6523, 6525, 6527, 6528, 6526];
    return Utils.hasAnyEquipped(equipment, obsidianWeaponIds);
  }

  get name() {
    return 'Obsidian armour passive';
  }
}

export default ObsidianArmourPassive;
