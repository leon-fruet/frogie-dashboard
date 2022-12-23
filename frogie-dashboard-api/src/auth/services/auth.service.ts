import { Inject, Injectable } from '@nestjs/common';
import { UserDetails } from '../../utils/types/User.type';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  async validateUser(details: UserDetails) {
    const { discordId, ...updatedDetails } = details;
    const user = await this.userService.findUser(discordId);
    return user
      ? this.userService.updateUser(user, updatedDetails)
      : this.userService.createUser(details);
  }
}
