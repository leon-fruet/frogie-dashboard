import { Injectable, Inject } from '@nestjs/common';
import { DiscordHttpService } from './discord-http.service';
import { DiscordUser } from 'src/utils/types/DiscordUser.type';
import { PartialGuild } from 'src/utils/types/PartialGuild.type';
import { assert } from 'console';

@Injectable()
export class DiscordService {
  constructor(
    @Inject(DiscordHttpService)
    private readonly discordHttpService: DiscordHttpService,
  ) {}
  getBotGuilds(): Promise<PartialGuild[]> {
    return this.discordHttpService.fetchBotGuilds();
  }

  getUserGuilds(accessToken: string): Promise<PartialGuild[]> {
    return this.discordHttpService.fetchUserGuilds(accessToken);
  }

  async getMutualGuilds(accessToken: string): Promise<{
    mutualGuilds: PartialGuild[];
    recommendedGuilds: PartialGuild[];
  }> {
    const botBuilds = await this.getBotGuilds();
    const userGuilds = await this.getUserGuilds(accessToken);
    const mutualGuilds = userGuilds.filter(
      (guild) =>
        botBuilds.some((botGuild) => botGuild.id == guild.id) &&
        ((+guild.permissions & 0x8) == 0x8 ||
          (+guild.permissions & 0x20) == 0x20 ||
          guild.owner),
    );
    const recommendedGuilds = userGuilds.filter(
      (guild) =>
        !botBuilds.some((botGuild) => botGuild.id == guild.id) &&
        ((+guild.permissions & 0x20) == 0x20 || guild.owner),
    );
    return { mutualGuilds, recommendedGuilds };
  }

  async getUserInfos(accessToken: string): Promise<DiscordUser> {
    return this.discordHttpService.getUserInfo(accessToken);
  }
}
