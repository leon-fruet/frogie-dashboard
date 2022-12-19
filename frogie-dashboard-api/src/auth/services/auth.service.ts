import { Inject, Injectable } from '@nestjs/common';
import { SERVICES } from '../../utils/constants';
import { IUserService } from '../../user/interface/user';
import { IAuthService } from '../interfaces/auth';
import { UserDetails } from '../../utils/types';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(SERVICES.USER)
    private readonly userService: IUserService,
  ) {}

  async validateUser(details: UserDetails) {
    const user = await this.userService.findUser(details.discordId);
    return user || this.userService.createUser(details);
  }
}
