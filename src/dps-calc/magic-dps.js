import Dps from './dps';

class MagicDps extends Dps {
  calculate() {
    this.dpsType = 'magicDps';
    this.effectiveStrength = this.skills.magic;
    this.strengthBonus = this.bonuses.magic_damage;
    this.effectiveAttack = this.skills.magic;
    this.attackBonus = this.bonuses.attack_magic;

    const dps = super.calculate();

    this.targetDefence = this.debuffedTarget.magic_level;
    this.targetDefenceBonus = this.debuffedTarget.defence_magic;

    return this.isInvalid() ? undefined : dps;
  }

  isInvalid() {
    return this.spell === undefined && !this.isSalamander();
  }

  isSalamander() {
    return /^(Swamp|Orange|Red|Black)\s(salamander|lizard)$/.test(this.equipment.weapon.name);
  }

  isStandardSpell() {
    return this.spell.attributes.includes('standard');
  }

  isAncientSpell() {
    return this.spell.attributes.includes('ancients');
  }

  isGodSpell() {
    return this.spell.attributes.includes('god');
  }

  isCharged() {
    return this.settings.isCharged;
  }

  isPowered() {
    return this.spell.attributes.includes('powered');
  }

  isMagicDart() {
    return this.spell.name === 'Magic dart';
  }

  isEnchantedSlayerStaff() {
    return /Slayer's staff \(e\)/.test(this.equipment.weapon.name);
  }

  get salamanderColor() {
    const sallyName = this.equipment.weapon.name;
    return sallyName.split(' ')[0].toLowerCase();
  }

  get attackSpeed() {
    if (this.spell) {
      return this.spell.castSpeed;
    }
    return 5; // salamander is 5, like most spells
  }

  get maxHit() {
    let max = 0;
    if (this.spell) {
      if (this.isStandardSpell() || this.isAncientSpell()) {
        max = this.spell.baseMaxHit;
        if (this.isGodSpell() && this.isCharged()) {
          max += 10;
        }
        if (this.isMagicDart()) {
          if (this.isEnchantedSlayerStaff()) {
            max = Math.floor(this.effectiveStrength * (1 / 6)) + 13;
          } else {
            max = Math.floor(this.effectiveStrength * 0.1) + 10;
          }
        }
      }
      if (this.isPowered()) {
        max = this.spell.baseMaxHit;
        max += Math.max(0, (this.effectiveStrength - 75) / 3);
      }
    } else {
      // salamanders should be the only ones arriving in this statement
      if (!this.isSalamander()) throw new Error('A non salamander arrived!');
      let bonus;
      switch (this.salamanderColor) {
        case 'swamp':
          bonus = 56;
          break;
        case 'orange':
          bonus = 59;
          break;
        case 'red':
          bonus = 77;
          break;
        case 'black':
          bonus = 92;
          break;
      }
      max = Math.floor(0.5 + this.skills.magic * (64 + bonus) / 640);
    }

    return Math.floor(max * (1 + this.strengthBonus / 100));
  }
}

export default MagicDps;
