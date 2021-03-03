import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { ThammaronsSceptrePassive } from '../boosts';

class ThammaronsSceptre extends ItemEffect {
  static name = 'Thammaron\'s sceptre';

  static ids = [22555];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, ThammaronsSceptre.ids);
  }

  static boost() {
    return new ThammaronsSceptrePassive();
  }
}

export default ThammaronsSceptre;
