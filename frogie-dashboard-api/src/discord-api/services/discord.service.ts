import { Injectable, Inject } from '@nestjs/common';
import { DiscordHttpService } from './discord-http.service';
import { DiscordGuild } from '../../../dist/utils/types/DiscordGuild';
import { User } from '../../utils/typeorm/entities/User';
import { DiscordUser } from 'src/utils/types/DiscordUser.type';

@Injectable()
export class DiscordService {
  constructor(
    @Inject(DiscordHttpService)
    private readonly discordHttpService: DiscordHttpService,
  ) {}
  getBotGuilds(): Promise<DiscordGuild[]> {
    return this.discordHttpService.fetchBotGuilds();
  }
  getUserGuilds(accessToken: string): Promise<DiscordGuild[]> {
    return this.discordHttpService.fetchUserGuilds(accessToken);
  }
  async getMutualGuilds(accessToken: string): Promise<DiscordGuild[]> {
    const botBuilds = await this.getBotGuilds();
    const userGuilds = await this.getUserGuilds(accessToken);
    return userGuilds.filter(
      (guild) =>
        // TODO: take care of permissions type v1!
        botBuilds.some((botGuild) => botGuild.id == guild.id) &&
        ((+guild.permissions | 0x8) == 0x8 ||
          (+guild.permissions | 0x20) == 0x20),
    );
  }

  async getUserInfos(accessToken: string): Promise<DiscordUser> {
    return this.discordHttpService.getUserInfo(accessToken);
  }
}
