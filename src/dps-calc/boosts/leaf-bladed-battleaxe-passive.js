import Boost from '../boost';

class LeafBladedBattleaxePassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'melee'];

  apply({ meleeDps }) {
    if (meleeDps && this.isTargetLeafy(meleeDps.target)) {
      meleeDps.addDamageModifier(this.name, 1.175);
      return true;
    }
    return false;
  }

  isTargetLeafy(target) {
    return target.attributes.includes('leafy');
  }

  get name() {
    return 'Leaf-bladed battleaxe passive';
  }
}

export default LeafBladedBattleaxePassive;
