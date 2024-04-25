import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema({timestamps:true})
export class Activity {

    @Prop({required:true})
    name:string

    @Prop([{type:SchemaTypes.ObjectId , ref:'terrains'  }])
    terrains:Types.ObjectId[]


}
export const activitySchema=SchemaFactory.createForClass(Activity)
