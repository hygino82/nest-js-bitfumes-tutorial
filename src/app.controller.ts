import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class AppController {
  @Get()
  getUsers() {
    return { name: 'Dilma', email: 'dilma@gmail.com' };
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
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
