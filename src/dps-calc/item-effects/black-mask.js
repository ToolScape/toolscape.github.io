import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import BlackMaskPassive from '../boosts/black-mask-passive';

class BlackMask extends ItemEffect {
  static name = 'Black mask';

  static regularIds = [8921, 11864];

  static imbuedIds = [11784, 11865];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment,
      [...BlackMask.regularIds, ...BlackMask.imbuedIds]);
  }

  static boost(equipment) {
    return new BlackMaskPassive(Utils.hasAnyEquipped(equipment, BlackMask.imbuedIds));
  }
}

export default BlackMask;
