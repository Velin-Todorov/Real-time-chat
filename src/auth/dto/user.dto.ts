import { IsAlphanumeric, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(5)
  password: string;

  @IsEmail()
  email: string;
}

export class LoginUserDto {
  @IsEmail()
  email: string;

  @IsAlphanumeric()
  password: string;
}
