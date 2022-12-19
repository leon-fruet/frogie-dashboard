import { UserDetails } from '../../utils/types';
import { User } from '../../utils/typeorm/entities/User';

export interface IUserService {
  createUser(details: UserDetails): Promise<User>;
  findUser(discordId: string): Promise<User> | undefined;
}
