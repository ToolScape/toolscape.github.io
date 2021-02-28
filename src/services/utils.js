class Utils {
  /**
   * Check if current equipment contains a certain a piece of equipment
   * @param equipment - current equipment of player
   * @param equipIds - arrays of ids OR single id => to check if they are equipped
   * @returns {boolean}
   */
  static hasEquipped(equipment, equipIds) {
    let ids;
    if (Array.isArray(equipIds)) {
      ids = equipIds;
    } else {
      ids = [equipIds];
    }
    const equipsArray = Object.values(equipment).filter(Boolean);
    for (let i = 0; i < ids.length; i++) {
      if (!equipsArray.some((equip) => ids.indexOf(equip.id) > -1)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Check if equipment has at least one of the items equipped
   * @param equipment - current equipment of player
   * @param equipIds - arrays of ids OR single id => to check if they are equipped
   * @returns {boolean}
   */
  static hasAnyEquipped(equipment, equipIds) {
    let ids;
    if (Array.isArray(equipIds)) {
      ids = equipIds;
    } else {
      ids = [equipIds];
    }
    const equipsArray = Object.values(equipment).filter(Boolean);
    for (let i = 0; i < ids.length; i++) {
      if (equipsArray.some((equip) => ids.indexOf(equip.id) > -1)) {
        return true;
      }
    }
    return false;
  }
}

export default Utils;
