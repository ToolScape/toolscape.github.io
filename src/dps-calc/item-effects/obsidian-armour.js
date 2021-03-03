import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { ObsidianArmourPassive } from '../boosts';

export class ObsidianArmour extends ItemEffect {
  static name = 'Obsidian armour';

  static helmId = 21298;

  static bodyId = 21301;

  static legsId = 21304;

  static check(equipment) {
    return Utils.hasEquipped(equipment, [
      ObsidianArmour.helmId,
      ObsidianArmour.bodyId,
      ObsidianArmour.legsId,
    ]);
  }

  static boost() {
    return new ObsidianArmourPassive();
  }
}

export default ObsidianArmour;
