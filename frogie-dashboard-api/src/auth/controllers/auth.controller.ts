import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ROUTES } from '../../utils/constants';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000/dashboard');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  @Post('logout')
  logout() {}
}
