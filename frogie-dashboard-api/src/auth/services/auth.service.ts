import { Inject, Injectable } from '@nestjs/common';
import { UserDetails } from '../../utils/types';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  async validateUser(details: UserDetails) {
    const user = await this.userService.findUser(details.discordId);
    return user || this.userService.createUser(details);
  }
}
