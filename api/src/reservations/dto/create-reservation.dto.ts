import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {

    @ApiProperty({
        type: Date,
        description: "this is a required filed"
    })
    @IsDate()
    @IsNotEmpty()

    date : Date

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
