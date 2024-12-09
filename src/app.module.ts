import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AutService } from './aut/aut.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule],
  controllers: [],
  providers: [AutService],
})
export class AppModule {}