class Dps {
  tickSpeed = 0.6;

  skills;

  equipment;

  bonuses;

  boosts;

  stance;

  weapon;

  target;

  constructor({
    skills, equipment, bonuses, boosts, stance, weapon,
  }, target) {
    this.skills = { ...skills };
    this.equipment = { ...equipment };
    this.bonuses = { ...bonuses };
    this.boosts = [...boosts];
    this.stance = stance;
    this.weapon = weapon;
    this.target = target;
  }

  setSkill(name, level) {
    if (Object.prototype.hasOwnProperty.call(this.skills, name)) {
      this.skills[name] = level;
    } else {
      throw new Error(`Skill '${name}' not found.`);
    }
  }

  setBonus(name, value) {
    if (Object.prototype.hasOwnProperty.call(this.bonuses, name)) {
      this.bonuses[name] = value;
    } else {
      throw new Error(`Bonus '${name}' not found.`);
    }
  }

  get attackType() {
    return this.stance.attack_type;
  }

  get attackSpeed() {
    return this.weapon ? this.weapon.attack_speed : 4;
  }

  get attackSpeedInSeconds() {
    return this.attackSpeed * this.tickSpeed;
  }
}

export default Dps;
