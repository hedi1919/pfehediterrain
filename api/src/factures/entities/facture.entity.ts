import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaType, Types } from "mongoose";

@Schema({timestamps:true})

export class Facture {

    @Prop({required:true})
    price:string

    //id reservation
    @Prop({required:true , Type:SchemaType , ref:"reservations"})
    reservation:Types.ObjectId

}

export const FactureSchema=SchemaFactory.createForClass(Facture)
