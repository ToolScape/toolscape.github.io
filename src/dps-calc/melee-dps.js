import { camelCase } from 'lodash';
import Dps from './dps';

class MeleeDps extends Dps {
  effectiveStrengthLevel;

  effectiveAttackLevel;

  calculate() {
    this.effectiveStrengthLevel = this.skills.strength;
    this.effectiveAttackLevel = this.skills.attack;

    this.boosts.sort((a, b) => b.priority - a.priority)
      .forEach((boost) => {
        boost.apply({ meleeDps: this });
      });

    return this;
  }

  get maxHit() {
    let result = this.effectiveStrengthLevel;
    result *= (this.bonuses.meleeStrength + 64);
    result += 320;
    result /= 640;
    result = Math.floor(result);
    result *= Math.max(this.bonuses.slayer, this.bonuses.undead);
    result = Math.floor(result);
    this.damageModifiers.forEach((value) => {
      result = Math.floor(result * value);
    });
    return result;
  }

  get attackRoll() {
    const attackBonus = this.bonuses[camelCase(`attack_${this.attackType}`)];
    let result = this.effectiveAttackLevel;
    result *= (attackBonus + 64);
    result *= Math.max(this.bonuses.slayer, this.bonuses.undead);
    result = Math.floor(result);
    return result;
  }

  get defenceRoll() {
    const targetDefence = this.debuffedTarget.defence_level + 9;
    const targetStyleDefence = this.debuffedTarget[`defence_${this.attackType}`] + 64;
    return targetDefence * targetStyleDefence;
  }

  get hitChance() {
    const { attackRoll } = this;
    const { defenceRoll } = this;
    if (attackRoll > defenceRoll) {
      return 1 - ((defenceRoll + 2) / (2 * attackRoll + 1));
    }
    return attackRoll / (2 * defenceRoll + 1);
  }

  get averageDamage() {
    return this.maxHit * this.hitChance / 2;
  }

  get dps() {
    return this.averageDamage / this.attackSpeedInSeconds;
  }
}

export default MeleeDps;
