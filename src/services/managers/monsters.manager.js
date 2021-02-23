import DataManager from '../data-manager';

class MonstersManager {
  getAll() {
    return DataManager.db.monsters.toArray();
  }
}

export default new MonstersManager();
