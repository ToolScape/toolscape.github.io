import Dps from './dps';

class MeleeDps extends Dps {
  effectiveStrengthLevel;

  effectiveAttackLevel;

  maxHit;

  attackRoll;

  defenceRoll;

  applyBoosts() {
    this.boosts.forEach((boost) => {
      boost.apply({ meleeDps: this });
    });
  }
}

export default MeleeDps;
