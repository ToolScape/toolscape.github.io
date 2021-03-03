import Boost from '../boost';

class BrimstoneRingPassive extends Boost {
  priority = 100;

  categories = ['passive', 'equipment', 'magic'];

  apply({ magicDps }) {
    if (magicDps) {
      // 25% chance to reduce by 10% = 2.5% reduction on average
      magicDps.addTargetDefenceRollModifier(this.name, 0.975);
    }
  }

  get name() {
    return 'Brimstone ring passive';
  }
}

export default BrimstoneRingPassive;
