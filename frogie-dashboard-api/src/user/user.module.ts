import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { SERVICES } from '../utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../utils/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
