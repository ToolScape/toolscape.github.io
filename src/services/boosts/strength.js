import Boost from '../boost';

class Strength extends Boost {
  priority = 10;

  apply() {
    const { strength } = this.player.skills;
    this.player.setSkill('strength', Math.floor(strength * 0.1) + 3);
  }
}

export default Strength;
