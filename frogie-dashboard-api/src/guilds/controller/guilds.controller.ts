import {
  Controller,
  Get,
  Inject,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ROUTES } from '../../utils/constants';
import { GuildConfiguration } from '../../utils/typeorm/entities/GuildConfiguration';
import { GuildsService } from '../services/guilds.service';

@Controller(ROUTES.GUILDS)
export class GuildsController {
  constructor(
    @Inject(GuildsService) private readonly guildsService: GuildsService,
  ) {}

  @Get('/config/:guildId')
  async getGuildConfig(
    @Param('guildId') guildId: string,
  ): Promise<GuildConfiguration> {
    const config = await this.guildsService.getGuildConfig(guildId);
    if (!config)
      throw new HttpException(
        'Guild Configuration not found',
        HttpStatus.NOT_FOUND,
      );
    return config;
  }
}
