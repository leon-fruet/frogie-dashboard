import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../utils/typeorm/entities/User';
import { Done } from '../../utils/types/General.type';
import { Inject } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';

export class SessionSerializer extends PassportSerializer {
  constructor(@Inject(UserService) private readonly userService: UserService) {
    super();
  }

  serializeUser(user: User, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Done) {
    try {
      const userDB = await this.userService.findUser(user.discordId);
      return userDB ? done(null, userDB) : done(null, null);
    } catch (e) {
      done(e, null);
    }
  }
}
