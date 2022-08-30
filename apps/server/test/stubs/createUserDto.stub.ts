import { CreateUserDto } from '../../src/users/dto/create-user.dto';

export const CreateUserDtoStub = (): CreateUserDto => ({
  name: 'William Shakespeare',
  email: 'will@stratford-avon.co.uk',
  password: 'supersecurepassword',
});
