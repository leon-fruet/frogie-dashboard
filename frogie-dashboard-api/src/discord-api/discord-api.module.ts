import { Module } from '@nestjs/common';
import { DiscordController } from './controllers/discord.controller';
import { DiscordService } from './services/discord.service';
import { DiscordHttpService } from './services/discord-http.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [DiscordController],
  providers: [DiscordService, DiscordHttpService],
})
export class DiscordApiModule {}
