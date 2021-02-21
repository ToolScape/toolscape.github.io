import Dexie from 'dexie';
import DataFetcher from './data-fetcher';

class DataManager {
  db;

  requiredFiles = [
    'monsters-complete.json',
    'prayers-complete.json',
    'items-2h.json',
    'items-ammo.json',
    'items-body.json',
    'items-cape.json',
    'items-feet.json',
    'items-hands.json',
    'items-head.json',
    'items-legs.json',
    'items-neck.json',
    'items-ring.json',
    'items-shield.json',
    'items-weapon.json',
  ];

  constructor() {
    this.db = new Dexie('toolscapedb');
    this.db.version(1).stores({
      files: 'name',
      items: 'id,name,equipment.slot',
      monsters: 'id,name',
      prayers: 'id,name',
    });
  }

  async checkForUpdates() {
    const files = [];

    await DataFetcher.fetchDocsContents().then((response) => {
      const { data } = response;
      const processedData = data
        .filter((i) => this.requiredFiles.indexOf(i.name) !== -1)
        .map((i) => ({
          name: i.name,
          sha: i.sha,
          path: i.path,
          size: i.size,
        }));
      files.push(...processedData);
    });

    await DataFetcher.fetchItemJsonSlotContents().then((response) => {
      const { data } = response;
      const processedData = data
        .filter((i) => this.requiredFiles.indexOf(i.name) !== -1)
        .map((i) => ({
          name: i.name,
          sha: i.sha,
          path: i.path,
          size: i.size,
        }));
      files.push(...processedData);
    });

    const updateRequiredForFiles = [];

    await Promise.all(files.map(async (file) => {
      const foundFile = await this.db.files.get(file.name);
      if (!foundFile || foundFile.sha !== file.sha) {
        updateRequiredForFiles.push(file);
      }
    }));

    return updateRequiredForFiles;
  }

  /**
   * Use this function to update the DBs by passing the file names of which dbs should be updated
   * @param {*} files - what dbs needs to be updated
   */
  async update(files) {
    await Promise.all(files.map(async (file) => {
      switch (file.name) {
        case 'monsters-complete.json':
          await this.updateMonsters(file);
          break;
        case 'prayers-complete.json':
          await this.updatePrayers(file);
          break;
        case 'items-2h.json':
        case 'items-ammo.json':
        case 'items-body.json':
        case 'items-cape.json':
        case 'items-feet.json':
        case 'items-hands.json':
        case 'items-head.json':
        case 'items-legs.json':
        case 'items-neck.json':
        case 'items-ring.json':
        case 'items-shield.json':
        case 'items-weapon.json':
          await this.updateItems(file);
          break;
      }
      await this.db.files.put(file);
    }));
  }

  async updateMonsters(file) {
    const { sha } = file;
    const { data: { content } } = await DataFetcher.fetchBlob(sha);
    const processedContent = Object.values(JSON.parse(atob(content)));
    await this.db.monsters.bulkPut(processedContent);
  }

  async updatePrayers(file) {
    const { sha } = file;
    const { data: { content } } = await DataFetcher.fetchBlob(sha);
    const processedContent = Object.values(JSON.parse(atob(content)));
    await this.db.prayers.bulkPut(processedContent);
  }

  async updateItems(file) {
    const { sha } = file;
    const { data: { content } } = await DataFetcher.fetchBlob(sha);
    const processedContent = Object.values(JSON.parse(atob(content)));
    await this.db.items.bulkPut(processedContent);
  }
}

export default new DataManager();
