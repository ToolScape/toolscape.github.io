import Boost from '../boost';
import SpellsManager from '../../services/managers/spells.manager';

class PoweredStaffSpell extends Boost {
  priority = 500;

  categories = ['special'];

  // seas, swamp, sang
  staffType;

  constructor(staffType) {
    super();
    this.staffType = staffType;
  }

  apply({ magicDps }) {
    if (magicDps) {
      switch (this.staffType) {
        case 'seas':
          magicDps.spell = SpellsManager.getByName('Trident of the seas');
          break;
        case 'swamp':
          magicDps.spell = SpellsManager.getByName('Trident of the swamp');
          break;
        case 'sang':
          magicDps.spell = SpellsManager.getByName('Sanguinesti staff');
          break;
      }
    }
  }

  get name() {
    return 'Powered staff spell';
  }
}

export default PoweredStaffSpell;
