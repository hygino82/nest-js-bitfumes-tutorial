import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  store(@Req() req: Request) {
    return this.userService.insert(req.body);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() params: { userId: number }) {
    return this.userService.updateUser(req.body, params.userId);
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.userService.getUserById(params.userId);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
