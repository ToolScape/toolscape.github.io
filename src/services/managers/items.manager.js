import DataManager from '../data-manager';

class ItemsManager {
  getBySlotAndName(slot, name) {
    const collection = DataManager.db.items.toCollection();
    if (slot) {
      collection
        .and((item) => item.equipment.slot.toLowerCase() === slot.toLowerCase());
    }
    if (name) {
      collection
        .and((item) => item.name.toLowerCase().startsWith(name.toLowerCase()));
    }
    return collection.toArray();
  }

  getBySlots(slots) {
    let collection = DataManager.db.items;
    if (slots) {
      collection = collection.where('equipment.slot').anyOfIgnoreCase(slots);
    }
    return collection.toArray();
  }

  getDarts() {
    return DataManager.db.items
      .toCollection()
      .filter((item) => /^\w+\sdart$/.test(item.name))
      .toArray();
  }

  getAll() {
    return DataManager.db.items.toArray();
  }

  getById(id) {
    return DataManager.db.items.get(id);
  }
}

export default new ItemsManager();
