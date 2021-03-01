import MeleeDps from './melee-dps';

class DpsCalculator {
  calculate(player, target, settings) {
    const meleeDps = new MeleeDps(player, target, settings);
    return meleeDps.calculate();
  }
}

export default new DpsCalculator();
