import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import VoidBoost from '../boosts/void-boost';

export class Void extends ItemEffect {
  static check(equipment) {
    const voidHelm = Utils.hasEquipped(equipment, 11665)
     || Utils.hasEquipped(equipment, 11664)
     || Utils.hasEquipped(equipment, 11663);
    const voidTop = Utils.hasEquipped(equipment, 8839)
      || Utils.hasEquipped(equipment, 13072);
    const voidRobe = Utils.hasEquipped(equipment, 8840)
      || Utils.hasEquipped(equipment, 13073);
    const voidGloves = Utils.hasEquipped(equipment, 8842);
    return voidHelm && voidTop && voidRobe && voidGloves;
  }

  static boost(equipment) {
    // TODO: Allow user to pick how specific this should be
    const type = 'all';
    return new VoidBoost(type,
      Utils.hasEquipped(equipment, 13072) && Utils.hasEquipped(equipment, 13073));
  }
}

export default Void;
