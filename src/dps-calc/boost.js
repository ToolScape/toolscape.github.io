class Boost {
  // Higher priority = applied first
  priority = 1;

  // Can have multiple categories
  // equipment, item, potion, prayer
  // attack, strength, ranged, magic
  categories = [];

  // true = visible, false = invisible
  visible = false;

  active = true;

  get name() {
    return 'No name';
  }

  get description() {
    return 'No description';
  }
}

export default Boost;
