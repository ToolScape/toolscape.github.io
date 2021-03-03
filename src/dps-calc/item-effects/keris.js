import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { KerisPassive } from '../boosts';

class Keris extends ItemEffect {
  static name = 'Keris';

  static ids = [10581, 10582, 10583, 10584];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, Keris.ids);
  }

  static boost() {
    return new KerisPassive();
  }
}

export default Keris;
