import Boost from './boost';

class ItemEffect {
  /**
   * Checks if your current equipment satisfies the requirements to receive a boost.
   * @param equipment
   * @returns Boolean
   */
  // eslint-disable-next-line no-unused-vars
  static check(equipment) {
    return false;
  }

  /**
   * Return an instance of a boost depending on your equipment
   * @param equipment
   * @returns Boost
   */
  // eslint-disable-next-line no-unused-vars
  static boost(equipment) {
    return new Boost();
  }
}

export default ItemEffect;
