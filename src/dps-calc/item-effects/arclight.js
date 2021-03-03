import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { ArclightPassive } from '../boosts';

class Arclight extends ItemEffect {
  static name = 'Arclight';

  static ids = [19675];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, Arclight.ids);
  }

  static boost() {
    return new ArclightPassive();
  }
}

export default Arclight;
