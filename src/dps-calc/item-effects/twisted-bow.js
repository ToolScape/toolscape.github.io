import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import TbowBoost from '../boosts/tbow-boost';

class TwistedBow extends ItemEffect {
  static name = 'Twisted bow';

  static check(equipment) {
    return Utils.hasEquipped(equipment, 20997);
  }

  static boost() {
    return new TbowBoost();
  }
}

export default TwistedBow;
