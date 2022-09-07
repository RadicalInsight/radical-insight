import * as dbUtils from '../../test/utils/db-utils';

import { Test, TestingModule } from '@nestjs/testing';
import { User, UserSchema } from './schemas/user.schema';
import { matchers, sundries, users } from '../../test/data';
import mongoose, { Connection } from 'mongoose';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let connection: Connection;
  let mongod: MongoMemoryServer;
  let service: UsersService;
  const { johann } = users;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forRootAsync({
          useFactory: async () => {
            mongod = await MongoMemoryServer.create();
            const mongoUri = mongod.getUri();
            return {
              uri: mongoUri,
            };
          },
        }),
      ],
      providers: [UsersService],
    }).compile();
    connection = await mongoose.createConnection(mongod.getUri());
    service = module.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    await mongod.stop();
  });

  describe('create()', () => {
    it('should save user, hash password', async () => {
      const result = await service.create(johann.createUserDto);
      expect(result._id.toString()).toMatch(matchers.objectId);
      expect(result.password).toMatch(matchers.hashedPassword);
      expect(result).toEqual(
        expect.objectContaining({
          name: johann.createUserDto.name,
          email: johann.createUserDto.email,
          __v: 0,
        })
      );
    });
  });

  describe('findOne()', () => {
    it('should find user', async () => {
      const id = await dbUtils.insertDocument({
        connection: connection,
        collectionName: 'users',
        document: johann.document,
      });
      const result = await service.findOne(id);
      expect(result).toEqual(
        expect.objectContaining({
          ...johann.document,
        })
      );
    });

    it('should throw NotFoundException when user id not found', async () => {
      expect(async () => {
        await service.findOne(sundries.objectId);
      }).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    let id: string;

    beforeEach(async () => {
      id = await dbUtils.insertDocument({
        connection: connection,
        collectionName: 'users',
        document: johann.document,
      });
    });

    afterEach(async () => {
      await dbUtils.deleteDocument({
        connection: connection,
        collectionName: 'users',
        id: id,
      });
    });

    it('should update user name', async () => {
      const result = await service.update(id, {
        name: 'j.s. bach',
      });
      expect(result.name).toBe('j.s. bach');
    });

    it('should update and hash user password', async () => {
      const result = await service.update(id, {
        password: 'thisisthenewpassword',
      });
      expect(result.password).not.toBe(johann.document.password);
      expect(result.password).toMatch(matchers.hashedPassword);
    });
  });

  describe('remove()', () => {
    let id: string;

    beforeEach(async () => {
      id = await dbUtils.insertDocument({
        connection: connection,
        collectionName: 'users',
        document: johann.document,
      });
    });

    it('should remove existing user document', async () => {
      await service.remove(id);
      const found = await dbUtils.assertDocumentFound({
        connection: connection,
        collectionName: 'users',
        id: id,
      });
      expect(found).toBe(false);
    });
  });
});
