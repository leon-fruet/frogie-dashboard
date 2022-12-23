import { Module } from '@nestjs/common';
import { GuildsController } from './controller/guilds.controller';
import { GuildsService } from './services/guilds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildConfiguration } from '../utils/typeorm/entities/GuildConfiguration';
import { DiscordApiModule } from '../discord-api/discord-api.module';

@Module({
  imports: [TypeOrmModule.forFeature([GuildConfiguration]), DiscordApiModule],
  controllers: [GuildsController],
  providers: [GuildsService],
})
export class GuildsModule {}
