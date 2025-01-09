import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,) {}
        

    async signin(signinDto: SigninDto) {
        //check if the user exist and get user

        const user = await this.userService.findOneByEmail(signinDto.email);
        // check if password is correct
        if (bcrypt.compare(signinDto.password, user.password)) {
            return user;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    signup(signupDto: SignupDto) {
        //crypter le mot de passes
        signupDto.password = bcrypt.hashSync(signupDto.password, 10 );
        //créer un utilisateur
       return this.userService.create(signupDto);
    }
}
