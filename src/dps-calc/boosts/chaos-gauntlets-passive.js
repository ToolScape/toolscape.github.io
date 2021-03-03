import Boost from '../boost';

class ChaosGauntletsPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ magicDps }) {
    if (magicDps && this.isBoltSpell(magicDps.spell)) {
      magicDps.bonusMaxHit += 3;
    }
  }

  isBoltSpell(spell) {
    return !!spell && spell.attributes.includes('bolt');
  }

  get name() {
    return 'Chaos gauntlets passive';
  }
}

export default ChaosGauntletsPassive;
