import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { CrawsBowPassive } from '../boosts';

class CrawsBow extends ItemEffect {
  static name = 'Craw\'s bow';

  static ids = [22550];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, CrawsBow.ids);
  }

  static boost() {
    return new CrawsBowPassive();
  }
}

export default CrawsBow;
