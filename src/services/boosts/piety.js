import Boost from '../boost';

class Piety extends Boost {
  priority = 9;

  apply() {
    const { strength, attack, defence } = this.player.skills;
    this.player.setSkill('strength', Math.floor(strength * 1.23));
    this.player.setSkill('attack', Math.floor(attack * 1.2));
    this.player.setSkill('defence', Math.floor(defence * 1.25));
  }
}

export default Piety;
