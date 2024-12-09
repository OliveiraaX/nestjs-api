import { UserRepository } from '../users/users.repository';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { User } from '../users/user.entity';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: UserRepository);
    signUp(createUserDto: CreateUserDto): Promise<User>;
}
