import { Injectable } from '@nestjs/common';
import { IUserService } from '../interface/user';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../utils/typeorm/entities/User';
import { Repository } from 'typeorm';
import { UserDetails } from '../../utils/types';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  createUser(details: UserDetails) {
    console.log('Create User');
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }
  findUser(discordId: string) {
    console.log('Find User');
    return this.userRepository.findOne({ where: { discordId: discordId } });
  }
}
