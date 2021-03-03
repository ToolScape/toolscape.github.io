import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { SalvePassive } from '../boosts';

class SalveAmulet extends ItemEffect {
  static name = 'Salve amulet';

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, [
      4081, // Regular
      10588, // Enchanted
      12017, // Imbued
      12018, // Imbued & Enchanted
    ]);
  }

  static boost(equipment) {
    const isEnchanted = Utils.hasAnyEquipped(equipment, [
      10588, // Enchanted
      12018, // Imbued & Enchanted
    ]);
    const isImbued = Utils.hasAnyEquipped(equipment, [
      12017, // Imbued
      12018, // Imbued & Enchanted
    ]);
    return new SalvePassive(isEnchanted, isImbued);
  }
}

export default SalveAmulet;
