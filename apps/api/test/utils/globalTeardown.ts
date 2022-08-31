import { MongoMemoryServer } from 'mongodb-memory-server';
import config from '../../config/config';

export = async function globalTeardown() {
  if (config.mongodb.useInMemoryDb) {
    const instance: MongoMemoryServer = globalThis.__MONGOINSTANCE__;
    await instance.stop();
  }
};
