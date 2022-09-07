import * as bcrypt from 'bcryptjs';

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  saltRounds = 12;

  constructor(
    @InjectModel(User.name) private readonly user: Model<UserDocument>
  ) {}

  private hashPassword(password: string): string {
    return bcrypt.hashSync(password, this.saltRounds);
  }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const { name, email, password } = createUserDto;
    const passwordHash = this.hashPassword(password);
    const newUser = new this.user({
      name: name,
      email: email,
      password: passwordHash,
    });

    return newUser
      .save()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async findOne(id: string): Promise<UserDocument> {
    const foundUser = await this.user.findById(id).exec();
    if (!foundUser) {
      throw new NotFoundException();
    }
    return foundUser;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UserDocument> {
    const updateUserParams = updateUserDto;
    if (updateUserParams.password) {
      updateUserParams.password = this.hashPassword(updateUserParams.password);
    }
    return await this.user.findByIdAndUpdate(id, updateUserParams, {
      new: true,
    });
  }

  async remove(id: string) {
    await this.user.findByIdAndRemove(id).exec();
  }
}
