import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { Strategy , ExtractJwt } from "passport-jwt";




type JwtPayload={
    sub:string, email:string
}


@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt'){

    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.JWT_ACCESS_TOKEN
          

        })
    }

    validate(payLoad:JwtPayload){
        return payLoad

    }

}