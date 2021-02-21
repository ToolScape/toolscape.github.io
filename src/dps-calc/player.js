import { camelCase } from 'lodash';
import PassiveBoost from './boosts/passive-boost';
import StanceBoost from './boosts/stance-boost';

class Player {
  skills = {
    attack: 1,
    strength: 1,
    defence: 1,
    ranged: 1,
    prayer: 1,
    magic: 1,
    hitpoints: 1,
  };

  equipment = {
    head: undefined,
    cape: undefined,
    neck: undefined,
    ammo: undefined,
    weapon: undefined,
    shield: undefined,
    body: undefined,
    legs: undefined,
    hands: undefined,
    feet: undefined,
    ring: undefined,
  };

  bonuses = {
    attackStab: 0,
    attackSlash: 0,
    attackCrush: 0,
    attackMagic: 0,
    attackRanged: 0,
    defenceStab: 0,
    defenceSlash: 0,
    defenceCrush: 0,
    defenceMagic: 0,
    defenceRanged: 0,
    meleeStrength: 0,
    rangedStrength: 0,
    magicDamage: 0,
    prayer: 0,
    slayer: 1,
    undead: 1,
  };

  boosts = [new PassiveBoost(), new StanceBoost()];

  stance;

  constructor({
    skills, equipment, boosts, stance,
  }) {
    this.skills = { ...skills };
    this.equipment = { ...equipment };
    this.boosts = [...this.boosts, ...boosts];
    this.stance = stance || {
      attack_style: 'accurate',
      attack_type: 'crush',
      boosts: '',
      combat_style: 'punch',
    };
    this.calculateBonuses();
  }

  calculateBonuses() {
    const skipBonuses = ['requirements', 'slot'];
    Object.values(this.equipment)
      .filter(Boolean)
      .forEach((item) => {
        const equipBonuses = item.equipment;
        Object.keys(equipBonuses)
          .filter((bonus) => skipBonuses.indexOf(bonus) === -1)
          .forEach((bonus) => {
            const bonusValue = equipBonuses[bonus];
            const camelCasedBonus = camelCase(bonus);
            this.bonuses[camelCasedBonus] += bonusValue;
          });
      });
  }

  // accepts a single id or an array of ids
  hasEquipped(equipIds) {
    let ids;
    if (!Array.isArray(equipIds)) {
      ids = [equipIds];
    } else {
      ids = equipIds;
    }
    const equipsArray = Object.values(this.equipment);
    for (let i = 0; i < ids.length; i++) {
      if (!equipsArray.some((equip) => ids.indexOf(equip.id) > -1)) {
        return false;
      }
    }
    return true;
  }

  get weapon() {
    if (this.equipment.weapon) {
      return this.equipment.weapon.weapon;
    }
    return undefined;
  }
}

export default Player;
