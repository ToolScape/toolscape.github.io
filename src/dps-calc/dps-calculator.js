import MeleeDps from './melee-dps';

class DpsCalculator {
  calculate(player) {
    const meleeDps = new MeleeDps(player, {
      defence_crush: 221,
      defence_level: 100,
      defence_magic: 0,
      defence_ranged: 225,
      defence_slash: 230,
      defence_stab: 227,
    });
    return meleeDps.calculate();
  }
}

export default new DpsCalculator();
