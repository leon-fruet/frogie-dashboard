import { UserDetails } from '../../utils/types';
import { User } from '../../utils/typeorm/entities/User';

export interface IAuthService {
  validateUser(details: UserDetails): Promise<User>;
}
