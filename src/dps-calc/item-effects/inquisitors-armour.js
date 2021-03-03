import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { InquisitorsArmourPassive } from '../boosts';

export class InquisitorsArmour extends ItemEffect {
  static name = 'Inquisitors armour';

  static helmId = 24419;

  static bodyId = 24420;

  static legsId = 24421;

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, [
      InquisitorsArmour.helmId,
      InquisitorsArmour.bodyId,
      InquisitorsArmour.legsId,
    ]);
  }

  static boost(equipment) {
    const hasHelmEquipped = Utils.hasEquipped(equipment, InquisitorsArmour.helmId);
    const hasBodyEquipped = Utils.hasEquipped(equipment, InquisitorsArmour.bodyId);
    const hasLegsEquipped = Utils.hasEquipped(equipment, InquisitorsArmour.legsId);
    let bonus = 0;
    bonus += hasHelmEquipped ? 0.005 : 0;
    bonus += hasBodyEquipped ? 0.005 : 0;
    bonus += hasLegsEquipped ? 0.005 : 0;
    if (hasHelmEquipped && hasBodyEquipped && hasLegsEquipped) {
      bonus += 0.01;
    }
    return new InquisitorsArmourPassive(1 + bonus);
  }
}

export default InquisitorsArmour;
