import * as testData from '../../test/data';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { createMock } from '@golevelup/ts-jest';

describe('UsersController', () => {
  const { objectId } = testData.sundries;
  const { william } = testData.users;
  let controller: UsersController;
  let service: UsersService;

  beforeEach(() => {
    service = createMock<UsersService>();
    controller = new UsersController(service);
  });
  it('should call UsersService.create() with valid user input', () => {
    const serviceCreate = jest.spyOn(service, 'create');
    controller.create(william.createUserDto);
    expect(serviceCreate).toBeCalledWith(william.createUserDto);
  });

  it('should call UsersService.findOne() with valid ObjectId', () => {
    const serviceFindOne = jest.spyOn(service, 'findOne');
    controller.findOne(objectId);
    expect(serviceFindOne).toBeCalledWith(objectId);
  });

  it('should call UsersService.update() with valid ObjectId and user input', () => {
    const serviceUpdate = jest.spyOn(service, 'update');
    controller.update(objectId, william.createUserDto);
    expect(serviceUpdate).toBeCalledWith(objectId, william.createUserDto);
  });

  it('should call UsersService.remove() with valid ObjectId', () => {
    const serviceRemove = jest.spyOn(service, 'remove');
    controller.remove(objectId);
    expect(serviceRemove).toBeCalledWith(objectId);
  });
});
