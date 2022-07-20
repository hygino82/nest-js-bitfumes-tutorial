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

const userList = [
  { name: 'Dilma', email: 'dilma@gmail.com', id: 1 },
  { name: 'Gorete', email: 'gorete@gmail.com', id: 2 },
  { name: 'Godofredo', email: 'godofredo@gmail.com', id: 3 },
  { name: 'Tenorio', email: 'tenorio@gmail.com', id: 4 },
  { name: 'Jupira', email: 'jupira@gmail.com', id: 5 },
];

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return userList;
  }

  @Post()
  store(@Req() req: Request) {
    //console.log(req.body);
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    //console.log(req.body);
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    const user = userList.filter((x) => x.id == params.userId);
    if (user.length === 0) return 'Não encontrado';
    return user;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
