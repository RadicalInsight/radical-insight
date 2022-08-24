import { IsEmail, MaxLength, MinLength } from "class-validator";

export class BaseUser {
  @MinLength(3)
  @MaxLength(120)
  name: string;

  @IsEmail()
  email: string;

  @MinLength(12)
  @MaxLength(120)
  password: string;
}
