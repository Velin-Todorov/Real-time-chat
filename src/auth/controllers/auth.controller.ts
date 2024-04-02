// Login, Logout, Register

import {
  Controller,
  Post,
  Logger,
  Res,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../services/auth.service';
import { Response } from 'express';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { log } from 'util';

@Controller('api')
export class AuthController {
  // constructor
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {}

  @Post('auth/signup')
  async signUp(
    @Res() res: Response,
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ) {
    try {
      createUserDto.password = await this.userService.hashPassword(
        createUserDto.password,
      );

      const response = await this.userService.createUser(createUserDto);
      return res.status(201).json(response);
    } catch (error) {
      this.logger.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  @Post('auth/login')
  async login(@Res() res: Response, @Body() loginUserDto: LoginUserDto) {
    
    try {
      const user = await this.userService.getUserByUsername(loginUserDto)

      if (user == -1){
        throw new Error('User does not exist')
      }
      const check = await this.userService.hashPassword(loginUserDto.password, )
    }
  }
}
