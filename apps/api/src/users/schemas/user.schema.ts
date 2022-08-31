import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { BaseUser } from '@radical-insight/common';
import { Document } from 'mongoose';

@Schema()
export class User extends BaseUser {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
