import ItemEffect from '../item-effect';
import Utils from '../../services/utils';
import { LeafBladedBattleaxePassive } from '../boosts';

class LeafBladedBattleaxe extends ItemEffect {
  static name = 'Leaf-bladed battleaxe';

  static ids = [20727];

  static check(equipment) {
    return Utils.hasAnyEquipped(equipment, LeafBladedBattleaxe.ids);
  }

  static boost() {
    return new LeafBladedBattleaxePassive();
  }
}

export default LeafBladedBattleaxe;
