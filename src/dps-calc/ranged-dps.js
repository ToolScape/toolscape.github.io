import Dps from './dps';

class RangedDps extends Dps {
  isRapid = false;

  calculate() {
    this.dpsType = 'rangedDps';
    this.effectiveStrength = this.skills.ranged;
    this.strengthBonus = this.bonuses.ranged_strength;
    this.effectiveAttack = this.skills.ranged;
    this.attackBonus = this.bonuses.attack_ranged;

    const dps = super.calculate();

    this.targetDefence = this.debuffedTarget.defence_level;
    this.targetDefenceBonus = this.debuffedTarget.defence_ranged;

    return dps;
  }

  get attackSpeed() {
    return super.attackSpeed - (this.isRapid ? 1 : 0);
  }
}

export default RangedDps;
