import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2'
import { CreateLoginDto } from './dto/create-login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { NotFoundError } from 'rxjs';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private jwtService:JwtService,
        private configService:ConfigService,
        private mailerService:MailerService

    ){}

    async signIn(createLoginDto:CreateLoginDto){
        //test user exist
        const user=await this.usersService.findOneEmail(createLoginDto.email)
        if(!user){
            throw new BadRequestException("User does not exist with this Email")
        }
        //test password correcte
        const passwordMatches=await argon2.verify(user.password, createLoginDto.password)
        if(!passwordMatches){
            throw new BadRequestException("Password is incorrecte")
        }

        //generate JWT (Json Web Token)
        const tokens=await this.getToken(user._id , user.email)
        await this.updateRefreshToken(user._id , tokens.refreshToken)
        return {user , tokens}




    }

    async getToken(userId:string, email:string){
        const [accessToken , refreshToken]=await Promise.all([
            this.jwtService.signAsync(
                {
                    sub:userId,
                    email
                           
                },
                {
                    secret:this.configService.get<string>('JWT_ACCESS_TOKEN'),
                    expiresIn:"10m"
                }

            ),
            this.jwtService.signAsync(
                {
                    sub:userId,
                    email
                },
                {
                    secret:this.configService.get<string>('JWT_REFRESH_TOKEN'),
                    expiresIn:'1d'
                }
            )


         ])
        return {accessToken , refreshToken}

    }
    
    async updateRefreshToken(userId:string , refreshToken:string){
        const hashedRefresh=await argon2.hash(refreshToken)
        await this.usersService.updateUser(userId , {refreshToken:hashedRefresh})
    }
    async logout(userId:string){
        await this.usersService.updateUser(userId, {refreshToken:null})
    }

    async refreshToken(userId:string, refreshToken:string){
        const user=await this.usersService.findOneUser(userId)
        if (!user || !user.refreshToken){
            throw new ForbiddenException("access denied")

        }

        const refreshTokenMatches=await argon2.verify (user.refreshToken , refreshToken)
        if(!refreshTokenMatches){
            throw new ForbiddenException("Access denied")

        }
        const tokens=await this.getToken(user._id , user.email)
        await this.updateRefreshToken(user._id , tokens.refreshToken)
        return {user , tokens}

    }

    async updatePassword (userId:string , updateUserDto:UpdateUserDto){
        const user=await this.usersService.findOneUser(userId)
        if(!user) throw new NotFoundException("user does not found")
        const hashedPassword=await argon2.hash(updateUserDto.password)
        await this.usersService.updateUser(userId,{...updateUserDto, password:hashedPassword})
        const tokens = await this.getToken(user._id, user.email)
        await this.updateRefreshToken(user._id, tokens.refreshToken)
        return {user, tokens}

    }
    async updateProfile(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.usersService.updateUser(id , updateUserDto);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        const tokens = await this.getToken(user.id, user.email)
        await this.updateRefreshToken(user._id, tokens.refreshToken)
        return {user, tokens}
        
    }

    async resetPassword(user:any , tokenPassword:string){
        const newPassword=tokenPassword
        await this.usersService.findOneEmail(user.email)
        await this.mailerService.sendMail({
            to:user.email,
            template:"./resetPassword",
            context:{
                subject:"Reset password",
                name:user.name,
                email:user.email,
                newPassword
            }
        })
        const hashedPassword=await argon2.hash(newPassword)
        await this.usersService.findUserAndResetPassword({email:user.email} ,
          {password:hashedPassword} )

    }


    









}
