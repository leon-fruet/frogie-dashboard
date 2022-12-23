import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
  async canActivate(context: ExecutionContext) {
    const activate = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return activate;
  }
}

@Injectable()
export class AuthenticatedGuard {
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    return req.isAuthenticated();
  }
}
