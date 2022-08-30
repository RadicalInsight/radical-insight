import * as dotenv from 'dotenv';

const envFile = `${__dirname}/.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

export default {
  mongodb: {
    databaseName: process.env.MONGODB_DB ?? 'radical-insight',
    host: process.env.MONGODB_HOST ?? 'localhost',
    port: process.env.MONGODB_PORT ?? '127017',
    useInMemoryDb: process.env.MONGODB_INMEMORY ?? true,
  },
};
