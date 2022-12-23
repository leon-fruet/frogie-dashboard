import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ROUTES } from '../../utils/constants';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from '../../utils/typeorm/entities/User';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    console.log('[INFO] Endpoint /api/auth/login got called.');
  }

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    console.log('[INFO] Endpoint /api/auth/redirect got called.');
    res.redirect('http://localhost:3000/menu');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@AuthUser() user: User) {
    console.log('[INFO] Endpoint /api/auth/status got called.');
    return user;
  }

  @Post('logout')
  logout() {
    console.log('[INFO] Endpoint /api/auth/logout got called.');
  }
}
