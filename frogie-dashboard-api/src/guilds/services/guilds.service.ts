import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuildConfiguration } from '../../utils/typeorm/entities/GuildConfiguration';
import { Repository } from 'typeorm';

@Injectable()
export class GuildsService {
  constructor(
    @InjectRepository(GuildConfiguration)
    private readonly guildConfigRepo: Repository<GuildConfiguration>,
  ) {}

  getGuildConfig(guildId: string): Promise<GuildConfiguration> {
    return this.guildConfigRepo.findOneBy({ guildId: guildId });
  }
}
