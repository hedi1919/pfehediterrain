import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaType, SchemaTypes, Types } from "mongoose";


@Schema({timestamps:true})

export class Reservation {

    @Prop({required:true})
    date:Date

    //id terrain
    @Prop({required:true , Type:SchemaType , ref:"terrains"})
    terrain:Types.ObjectId
     //id user
     @Prop({required:true , Type:SchemaType , ref:"users"})
     user:Types.ObjectId
    

}

export const ReservationSchema=SchemaFactory.createForClass(Reservation)

