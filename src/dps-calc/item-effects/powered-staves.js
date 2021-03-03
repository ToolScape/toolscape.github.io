import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import PoweredStaffSpell from '../boosts/powered-staff-spell';

class PoweredStaves extends ItemEffect {
  static name = 'Powered staves';

  static tridentOfTheSeas = [11907, 22288];

  static tridentOfTheSwamp = [12899, 22292];

  static sanguinestiStaff = [22323];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, [
      ...PoweredStaves.tridentOfTheSeas,
      ...PoweredStaves.tridentOfTheSwamp,
      ...PoweredStaves.sanguinestiStaff,
    ]);
  }

  static boost(equipment) {
    let staffType;
    if (Utils.hasAnyEquipped(equipment, PoweredStaves.tridentOfTheSeas)) {
      staffType = 'seas';
    } else if (Utils.hasAnyEquipped(equipment, PoweredStaves.tridentOfTheSwamp)) {
      staffType = 'swamp';
    } else if (Utils.hasAnyEquipped(equipment, PoweredStaves.sanguinestiStaff)) {
      staffType = 'sang';
    }
    return new PoweredStaffSpell(staffType);
  }
}

export default PoweredStaves;
