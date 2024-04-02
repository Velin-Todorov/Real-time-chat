import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user.entity';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';

type HashedPassword = string;
type Password = string;

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly logger: Logger,
  ) {}

  async createUser(data: CreateUserDto): Promise<User | undefined> {
    try {
      const newUser = new this.userModel(data);
      return await newUser.save();
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async getUserByUsername(data: LoginUserDto): Promise<User | number> {
    const user = await this.userModel.findOne({ email: data.email }).exec();
    if (user) {
      return user;
    }
    return -1;
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
  }

  async checkPassword(
    password: Password,
    hashedPassword: HashedPassword,
  ): Promise<boolean> {
    const check = await bcrypt.compare(password, hashedPassword);
    return check;
  }
}
