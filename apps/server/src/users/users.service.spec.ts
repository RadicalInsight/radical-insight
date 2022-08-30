import { Test, TestingModule } from '@nestjs/testing';
import { User, UserSchema } from './schemas/user.schema';
import {
  closeInMemoryDbConnection,
  rootMongooseTestModule,
} from '../../test/utils/rootMongooseTestModule';

import { CreateUserDtoStub } from './../../test/stubs/createUserDto.stub';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  const createuserDtoStub = CreateUserDtoStub();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forRootAsync({
          useFactory: async () => {
            const mongod = await MongoMemoryServer.create();
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
    await closeInMemoryDbConnection();
  });

  describe('create()', () => {
    it('should save valid user', async () => {
      service.create(createuserDtoStub).then((result) => {
        expect(result).toHaveProperty('_id');
      });
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
