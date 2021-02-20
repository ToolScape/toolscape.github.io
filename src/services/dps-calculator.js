import MeleeDps from './melee-dps';

class DpsCalculator {
  static calculate(player) {
    const meleeDps = new MeleeDps({
      skills: { ...player.skills },
      bonuses: { ...player.bonuses },
      boosts: player.boosts,
    });
    return player;
  }
}

export default DpsCalculator;
