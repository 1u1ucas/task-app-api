import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,) {}
        

    signin(signinDto: SigninDto) {
    }

    signup(signupDto: SignupDto) {
        //crypter le mot de passes
        signupDto.password = bcrypt.hashSync(signupDto.password, 10 );
        //créer un utilisateur
       return this.userService.create(signupDto);
    }
}
