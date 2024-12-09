import { UserRepository } from 'src/users/users.repository';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { User } from '../users/user.entity';
export declare class AutService {
    private userRepository;
    constructor(userRepository: UserRepository);
    signUp(createUserDto: CreateUserDto): Promise<User>;
}
