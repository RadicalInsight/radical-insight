import * as testData from '../../test/data';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { createMock } from '@golevelup/ts-jest';

describe('UsersController', () => {
  const { objectId } = testData.sundries;
  const { william } = testData.users.valid;
  let controller: UsersController;
  let service: UsersService;

  beforeEach(() => {
    service = createMock<UsersService>();
    controller = new UsersController(service);
  });
  it('should call UsersService.create() with valid user input', () => {
    const serviceCreate = jest.spyOn(service, 'create');
    controller.create(william);
    expect(serviceCreate).toBeCalledWith(william);
  });

  it('should call UsersService.findAll()', () => {
    const serviceFindAll = jest.spyOn(service, 'findAll');
    controller.findAll();
    expect(serviceFindAll).toBeCalled();
  });

  it('should call UsersService.findOne() with valid ObjectId', () => {
    const serviceFindOne = jest.spyOn(service, 'findOne');
    controller.findOne(objectId);
    expect(serviceFindOne).toBeCalledWith(objectId);
  });

  it('should call UsersService.update() with valid ObjectId and user input', () => {
    const serviceUpdate = jest.spyOn(service, 'update');
    controller.update(objectId, william);
    expect(serviceUpdate).toBeCalledWith(objectId, william);
  });
});
