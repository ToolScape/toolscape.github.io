class Dps {
  skills;

  bonuses;

  boosts;

  stance;

  constructor({
    skills, bonuses, boosts, stance,
  }) {
    this.skills = skills;
    this.bonuses = bonuses;
    this.boosts = boosts;
    this.stance = stance;
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
}

export default Dps;
