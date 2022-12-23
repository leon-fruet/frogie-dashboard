import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError } from 'rxjs';
import { AxiosError } from 'axios';
import { DiscordUser } from 'src/utils/types/DiscordUser.type';
import { PartialGuild } from 'src/utils/types/PartialGuild.type';

@Injectable()
export class DiscordHttpService {
  constructor(private readonly httpService: HttpService) {}

  async fetchBotGuilds(): Promise<PartialGuild[]> {
    console.log('[INFO] DiscordBot-Endpoint /users/@me/guilds got called.');
    const botToken = process.env.DISCORD_BOT_TOKEN;
    const { data } = await firstValueFrom(
      this.httpService
        .get<PartialGuild[]>('https://discord.com/api/v9/users/@me/guilds', {
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
  async fetchUserGuilds(accessToken: string): Promise<PartialGuild[]> {
    console.log('[INFO] Discord-Endpoint /users/@me/guilds got called.');
    const { data } = await firstValueFrom(
      this.httpService
        .get<PartialGuild[]>('https://discord.com/api/v9/users/@me/guilds', {
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
    console.log('[INFO] Discord-Endpoint /users/@me got called.');
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
