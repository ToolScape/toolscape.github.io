import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { ScytheOfViturPassive } from '../boosts';

class ScytheOfVitur extends ItemEffect {
  static name = 'Scythe of vitur';

  static ids = [22325];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, ScytheOfVitur.ids);
  }

  static boost() {
    return new ScytheOfViturPassive();
  }
}

export default ScytheOfVitur;
