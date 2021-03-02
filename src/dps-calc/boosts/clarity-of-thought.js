import Boost from '../boost';

class ClarityOfThought extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttack } = meleeDps;
      meleeDps.effectiveAttack = Math.floor(effectiveAttack * 1.05);
    }
  }

  get name() {
    return 'Clarity of Thought';
  }

  get description() {
    return '+5% Attack';
  }
}

export default ClarityOfThought;
