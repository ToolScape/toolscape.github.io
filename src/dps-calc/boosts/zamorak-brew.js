import Boost from '../boost';

class ZamorakBrew extends Boost {
  priority = 1000;

  categories = ['potion', 'attack'];

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttack } = meleeDps;
      meleeDps.effectiveAttack += Math.floor(effectiveAttack * 0.2) + 2;
      // strength boost ignored, that way users can combine super strength and this potion.
      return true;
    }
    return false;
  }

  get name() {
    return 'Zamorak brew';
  }
}

export default ZamorakBrew;
