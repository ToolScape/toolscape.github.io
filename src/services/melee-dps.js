import Dps from './dps';

class MeleeDps extends Dps {
  effectiveStrengthLevel;

  effectiveAttackLevel;

  maxHit;

  attackRoll;

  defenceRoll;

  calculate() {
    this.effectiveStrengthLevel = this.skills.strength;
    this.effectiveAttackLevel = this.skills.attack;

    this.boosts.forEach((boost) => {
      boost.apply({ meleeDps: this });
    });
  }
}

export default MeleeDps;
