import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/users.module';
import { LocalStrategy } from './local-strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [UsersService, AuthService, LocalStrategy],
})
export class AuthModule {}
