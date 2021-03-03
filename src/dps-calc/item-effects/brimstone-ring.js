import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { BrimstoneRingPassive } from '../boosts';

class BrimstoneRing extends ItemEffect {
  static name = 'Brimstone ring';

  static ids = [22975];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, BrimstoneRing.ids);
  }

  static boost() {
    return new BrimstoneRingPassive();
  }
}

export default BrimstoneRing;
