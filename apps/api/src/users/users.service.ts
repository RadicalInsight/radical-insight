import * as bcrypt from 'bcryptjs';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private user: Model<UserDocument>) {}

  private hashPassword(password: string): string {
    return bcrypt.hash(password, 12, (err, hash) => {
      if (err) {
        throw new InternalServerErrorException(err);
      }
      return hash;
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const passwordHash = this.hashPassword(password);
    const newUser = new this.user({
      name: name,
      email: email,
      password: passwordHash,
    });

    return await newUser.save();

    // return this.user
    //   .create({
    //     name: name,
    //     email: email,
    //     password: passwordHash,
    //   })
    //   .then((result) => {
    //     return result;
    //   })
    //   .catch((err) => {
    //     throw new InternalServerErrorException(err);
    //   });
  }

  async findAll() {
    return await this.user.find().exec();
  }

  async findOne(id: string) {
    const foundUser = await this.user.findById(id).exec();
    if (!foundUser) {
      throw new NotFoundException();
    }
    return foundUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUserParams = updateUserDto;
    if (updateUserParams.password) {
      updateUserParams.password = this.hashPassword(updateUserParams.password);
    }
    return await this.user.findByIdAndUpdate(id, updateUserParams, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.user.findByIdAndRemove(id);
  }
}
