import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-discord';
import { Inject, Injectable } from '@nestjs/common';
import { SERVICES } from '../../utils/constants';
import { IAuthService } from '../interfaces/auth';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(SERVICES.AUTH) private readonly authService: IAuthService,
  ) {
    super({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_REDIRECT_URL,
      scope: ['identify', 'email', 'guilds'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('User logged in', [profile.username, profile.id]);
    return this.authService.validateUser({ discordId: profile.id });
  }
}
