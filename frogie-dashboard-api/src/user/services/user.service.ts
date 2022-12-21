import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../utils/typeorm/entities/User';
import { Repository } from 'typeorm';
import { UserDetails } from '../../utils/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  createUser(details: UserDetails) {
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }
  findUser(discordId: string) {
    return this.userRepository.findOne({ where: { discordId: discordId } });
  }
}
