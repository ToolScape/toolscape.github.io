import Dps from './dps';

class MeleeDps extends Dps {
  calculate() {
    this.dpsType = 'meleeDps';
    this.effectiveStrength = this.skills.strength;
    this.strengthBonus = this.bonuses.melee_strength;
    this.effectiveAttack = this.skills.attack;
    this.attackBonus = this.bonuses[`attack_${this.attackType}`];

    const dps = super.calculate();

    this.targetDefence = this.debuffedTarget.defence_level;
    this.targetDefenceBonus = this.debuffedTarget[`defence_${this.attackType}`];

    return dps;
  }
}

export default MeleeDps;
