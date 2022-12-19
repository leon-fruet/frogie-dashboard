import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../utils/typeorm/entities/User';
import { Done } from '../../utils/types';
import { Inject } from '@nestjs/common';
import { SERVICES } from '../../utils/constants';
import { IUserService } from '../../user/interface/user';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {
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
