import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import DharoksBoost from '../boosts/dharoks-boost';

export class DharoksSet extends ItemEffect {
  static check(equipment) {
    const dharoksSet = [
      4718, // Dharok's greataxe
      4716, // Dharok's helm
      4720, // Dharok's platebody
      4722, // Dharok's platelegs
    ];
    return Utils.hasEquipped(equipment, dharoksSet);
  }

  static boost() {
    return new DharoksBoost();
  }
}

export default DharoksSet;
