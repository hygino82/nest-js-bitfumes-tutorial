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
  update(@Req() req: Request, @Param() param: { userId: number }) {
    return this.userService.updateUser(req.body, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUserById(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.deleteUser(param);
  }

  @Post('/virgulino')
  insereVirgulino() {
    return this.userService.adicionarUsuario({ name: 'virgulino', email: 'virgulino@gmail.com', id: 7 });
  }
}
