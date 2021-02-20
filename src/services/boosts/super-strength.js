import Boost from '../boost';

class SuperStrength extends Boost {
  priority = 10;

  apply() {
    const { strength } = this.player.skills;
    this.player.setSkill('strength', Math.floor(strength * 0.15) + 5);
  }
}

export default SuperStrength;
