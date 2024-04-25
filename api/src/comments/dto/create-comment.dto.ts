import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateCommentDto {

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()

    comment: string

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()

    note: string

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()
    terrain:string

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()
    user:string



}
