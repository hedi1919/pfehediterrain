import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsNumber } from "class-validator"

export class CreateUserDto {

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()
    role:string
    
    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()
    
    fullName: string


    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()


    userName: string

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()
    email: string

    @ApiProperty({
        type: Number,
        description: "this is a required field"
    })
    @IsNumber()
    @IsNotEmpty()

    phone: number

    @ApiProperty({
        type: String,
        description: "this is a required field"
    })
    @IsString()
    @IsNotEmpty()
    password: string
}
