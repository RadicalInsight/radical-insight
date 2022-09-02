import { Test, TestingModule } from '@nestjs/testing';
import { User, UserSchema } from './schemas/user.schema';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { users } from '../../test/data/users';

describe('UsersService', () => {
  let mongod: MongoMemoryServer;
  let service: UsersService;
  const { william } = users.valid;

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

    service = module.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    await mongod.stop();
  });

  describe('create()', () => {
    it('should save valid user', async () => {
      const result = await service.create(william);
      expect(result).toHaveProperty('_id');
    });
  });

  // describe("findAll()", () => {});

  describe('findOne()', () => {
    it('should return NotFoundException when user id not found', async () => {
      await service.findOne('507f1f77bcf86cd799439011').catch((err) => {
        expect(err).toBeInstanceOf(NotFoundException);
      });
    });
  });

  // describe("update()", () => {});

  // describe("remove()", () => {});
});
