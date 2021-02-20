import Boost from '../boost';

class BlackMask extends Boost {
  apply() {
    this.player.setBonus('slayer', 7 / 6);
  }
}

export default BlackMask;
