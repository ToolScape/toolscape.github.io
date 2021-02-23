import MeleeDps from './melee-dps';

class DpsCalculator {
  calculate(player, target) {
    const meleeDps = new MeleeDps(player, target);
    return meleeDps.calculate();
  }
}

export default new DpsCalculator();
