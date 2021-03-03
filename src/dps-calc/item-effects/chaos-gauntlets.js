import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { ChaosGauntletsPassive } from '../boosts';

class ChaosGauntlets extends ItemEffect {
  static name = 'Chaos gauntlets';

  static ids = [777];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, ChaosGauntlets.ids);
  }

  static boost() {
    return new ChaosGauntletsPassive();
  }
}

export default ChaosGauntlets;
