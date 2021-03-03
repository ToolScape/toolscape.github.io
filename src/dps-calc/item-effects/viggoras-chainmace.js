import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { ViggorasChainmacePassive } from '../boosts';

class ViggorasChainmace extends ItemEffect {
  static name = 'Viggora\'s chainmace';

  static ids = [22545];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, ViggorasChainmace.ids);
  }

  static boost() {
    return new ViggorasChainmacePassive();
  }
}

export default ViggorasChainmace;
