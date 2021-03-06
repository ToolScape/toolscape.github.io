import Boost from '../boost';

class DharoksBoost extends Boost {
  priority = 100;

  apply({ meleeDps }) {
    if (meleeDps) {
      const playerMaxHp = meleeDps.skills.hitpoints;
      const playerCurrentHp = meleeDps.settings.currentHitpoints;
      const damageModifier = 1 + (playerMaxHp - playerCurrentHp) / 100 * (playerMaxHp / 100);
      meleeDps.addDamageModifier(this.name, damageModifier);
      return true;
    }
    return false;
  }

  get name() {
    return 'Dharok\'s boost';
  }
}

export default DharoksBoost;
