import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { ROUTES } from '../../utils/constants';
import { DiscordService } from '../services/discord.service';
import { AuthUser } from 'src/utils/decorators';
import { User } from '../../utils/typeorm/entities/User';
import { AuthenticatedGuard } from '../../auth/utils/Guards';
import { DiscordGuild } from '../../../dist/utils/types/DiscordGuild';
import { DiscordUser } from 'src/utils/types/DiscordUser.type';

@Controller(ROUTES.DISCORD)
@UseGuards(AuthenticatedGuard)
export class DiscordController {
  constructor(
    @Inject(DiscordService) private readonly discordService: DiscordService,
  ) {}

  @Get('guilds')
  getMutualGuilds(
    @AuthUser() user: User,
  ): Promise<[DiscordGuild[], DiscordGuild[]]> {
    console.log('[INFO] Endpoint /api/discord/guilds got called.');
    return this.discordService.getMutualGuilds(user.accessToken);
  }

  @Get('user')
  getCurrentUserData(@AuthUser() user: User): Promise<DiscordUser> {
    console.log('[INFO] Endpoint /api/discord/user got called.');
    return this.discordService.getUserInfos(user.accessToken);
  }
}
