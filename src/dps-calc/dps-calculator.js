import MeleeDps from './melee-dps';
import RangedDps from './ranged-dps';
import MagicDps from './magic-dps';

class DpsCalculator {
  calculate(player, target, settings) {
    let dps;
    switch (this.determineStyle(player.stance)) {
      case 'ranged':
        dps = new RangedDps(player, target, settings);
        break;
      case 'magic':
        dps = new MagicDps(player, target, settings);
        break;
      default:
        dps = new MeleeDps(player, target, settings);
    }
    return dps.calculate();
  }

  determineStyle(stance) {
    if (!stance || !stance.experience) return 'melee';
    if (stance.experience.includes('ranged')) {
      return 'ranged';
    }
    if (stance.experience.includes('magic')) {
      return 'magic';
    }
    return 'melee';
  }
}

export default new DpsCalculator();
