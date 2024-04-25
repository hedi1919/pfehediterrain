import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { SchemaType, SchemaTypes, Types } from "mongoose";


@Schema({timestamps:true})
export class Terrain {
    @Prop({required:true})
    title:string
    @Prop({required:true})
    description:string
    @Prop({required:true})
    price:string
    @Prop({required:true})
    duration:string
    @Prop({required:true})
    adress:string
    @Prop({required:true})
    participants:string
    @Prop({required:true})
    status:string
    @Prop({required:true})
    surface:string
    @Prop({required:true})
    latitude:string
    @Prop({required:true})
    longitude:string
    @Prop({required:true})
    files:string[]
    @Prop({required:true , Type:SchemaType , ref:"activities"})
    activity:Types.ObjectId
    @Prop({required:true , Type:SchemaType , ref:"gouvernorats"})
    gouvernorat:Types.ObjectId
    @Prop([{type:SchemaTypes.ObjectId , ref:'comments'  }])
    comments:Types.ObjectId[]
    @Prop([{type:SchemaTypes.ObjectId , ref:'reservations'  }])
    reservations:Types.ObjectId[]









}
export const TerrainSchema=SchemaFactory.createForClass(Terrain)
