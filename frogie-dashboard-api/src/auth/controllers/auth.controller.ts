import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ROUTES } from '../../utils/constants';
import { DiscordAuthGuard } from '../utils/Guards';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
