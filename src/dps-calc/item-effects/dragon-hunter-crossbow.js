import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { DhcbPassive } from '../boosts';

class DragonHunterCrossbow extends ItemEffect {
  static name = 'Dragon hunter crossbow';

  static ids = [21012];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, DragonHunterCrossbow.ids);
  }

  static boost() {
    return new DhcbPassive();
  }
}

export default DragonHunterCrossbow;
