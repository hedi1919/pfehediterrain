import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateFactureDto {

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()

    price: string;

    @ApiProperty({
        type: String,
        description: "this is a required filed"
    })
    @IsString()
    @IsNotEmpty()
    reservation:string

}
