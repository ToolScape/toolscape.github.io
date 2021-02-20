import PassiveBoost from './boosts/passive-boost';
import MeleeDps from './melee-dps';

class Player {
  skills = {
    attack: 1,
    strength: 1,
    defence: 1,
    ranged: 1,
    prayer: 1,
    magic: 1,
    hitpoints: 1,
    runecraft: 1,
    crafting: 1,
    mining: 1,
    smithing: 1,
    fishing: 1,
    cooking: 1,
    firemaking: 1,
    woodcutting: 1,
    agility: 1,
    herblore: 1,
    thieving: 1,
    fletching: 1,
    slayer: 1,
    farming: 1,
    construction: 1,
    hunter: 1,
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
    slayer: 0,
    undead: 0,
  };

  boosts = [new PassiveBoost()];

  constructor({ skills, equipment, boosts }) {
    this.skills = { ...skills };
    this.equipment = { ...equipment };
    this.boosts = [...boosts];
  }

  calculateBonuses() {
    Object.keys(this.equipment).forEach((key) => {
      console.log(this.equipment[key]);
    });
  }

  calculateMeleeDps() {
    this.dps.meleeDps = new MeleeDps(this);
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
      if (!equipsArray.some(ids[i])) {
        return false;
      }
    }
    return true;
  }
}

export default Player;
