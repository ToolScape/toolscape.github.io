import DataManager from '../data-manager';

class PrayersManager {
  getAll() {
    return DataManager.db.prayers.toArray();
  }
}

export default new PrayersManager();
