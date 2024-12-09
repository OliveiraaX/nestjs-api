import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
}
