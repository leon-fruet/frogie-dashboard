import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../utils/typeorm/entities/User';
import { Repository } from 'typeorm';
import { UserDetails, UserDetailsToUpdate } from '../../utils/types/User.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  createUser(details: UserDetails): Promise<User> {
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }
  findUser(discordId: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { discordId: discordId } });
  }
  updateUser(user: User, newUserDetails: UserDetailsToUpdate): Promise<User> {
    return this.userRepository.save({
      ...user,
      ...newUserDetails,
    });
  }
}
