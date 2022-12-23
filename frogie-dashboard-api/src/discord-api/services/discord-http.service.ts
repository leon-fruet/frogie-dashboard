import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError } from 'rxjs';
import { AxiosError } from 'axios';
import { DiscordGuild } from '../../../dist/utils/types/DiscordGuild';
import { DiscordUser } from 'src/utils/types/DiscordUser.type';

@Injectable()
export class DiscordHttpService {
  constructor(private readonly httpService: HttpService) {}

  async fetchBotGuilds(): Promise<DiscordGuild[]> {
    const botToken = process.env.DISCORD_BOT_TOKEN;
    const { data } = await firstValueFrom(
      this.httpService
        .get<DiscordGuild[]>('https://discord.com/api/v9/users/@me/guilds', {
          headers: {
            Authorization: `Bot ${botToken}`,
            'Accept-Encoding': 'gzip,deflate,compress',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'Error';
          }),
        ),
    );
    return data;
  }
  async fetchUserGuilds(accessToken: string): Promise<DiscordGuild[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<DiscordGuild[]>('https://discord.com/api/v9/users/@me/guilds', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Accept-Encoding': 'gzip,deflate,compress',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'Error';
          }),
        ),
    );
    return data;
  }

  async getUserInfo(accessToken: string): Promise<DiscordUser> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<DiscordUser>('https://discord.com/api/v9/users/@me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Accept-Encoding': 'gzip,deflate,compress',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'Error';
          }),
        ),
    );
    return data;
  }
}
