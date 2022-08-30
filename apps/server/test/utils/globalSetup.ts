import { MongoMemoryServer } from 'mongodb-memory-server';
import config from '../../utils/config/config';
import mongoose from 'mongoose';

let mongoUri: string;

export = async function globalSetup() {
  if (config.mongodb.useInMemoryDb) {
    const instance = await MongoMemoryServer.create();
    const uri = instance.getUri();
    globalThis.__MONGOINSTANCE__ = instance;
    mongoUri = uri.slice(0, uri.lastIndexOf('/'));
  } else {
    mongoUri = `mongodb://${config.mongodb.host}:${config.mongodb.port}`;
  }

  process.env.MONGO_URI = mongoUri;

  // await mongoose.connect(
  //   `${process.env.MONGO_URI}/${config.mongodb.databaseName}`
  // );
  // await mongoose.connection.db.dropDatabase();
  // await mongoose.disconnect();
};
