import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AutService } from '../aut/aut.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [AuthController],
  providers: [AutService],
})
export class AuthModule {}