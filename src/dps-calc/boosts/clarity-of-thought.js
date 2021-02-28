import Boost from '../boost';

class ClarityOfThought extends Boost {
  priority = 9;

  apply({ meleeDps }) {
    if (meleeDps) {
      const { effectiveAttackLevel } = meleeDps;
      meleeDps.effectiveAttackLevel = Math.floor(effectiveAttackLevel * 1.05);
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
