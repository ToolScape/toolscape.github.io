import Boost from '../boost';

class InquisitorsArmourPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  bonus = 0;

  constructor(bonus) {
    super();
    this.bonus = bonus;
  }

  apply({ meleeDps }) {
    if (meleeDps && this.isCrushStance(meleeDps.stance)) {
      meleeDps.addAccuracyModifier(this.name, this.bonus);
      meleeDps.addDamageModifier(this.name, this.bonus);
      return true;
    }
    return false;
  }

  isCrushStance(stance) {
    return stance.attack_type === 'crush';
  }

  get name() {
    return 'Inquisitor\'s armour passive';
  }
}

export default InquisitorsArmourPassive;
