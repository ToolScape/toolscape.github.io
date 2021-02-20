class Dps {
  skills;

  bonuses;

  boosts;

  constructor({ skills, bonuses, boosts }) {
    this.skills = skills;
    this.bonuses = bonuses;
    this.boosts = boosts;
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
