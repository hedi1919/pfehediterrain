import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { SchemaType, Types } from "mongoose"

@Schema({timestamps:true})
export class Comment {

    @Prop({required:true})
    comment:string
    @Prop({required:true})
    note:string
    @Prop({required:true , Type:SchemaType , ref:"terrains"})
    terrain:Types.ObjectId
    @Prop({required:true , Type:SchemaType , ref:"users"})
    user:Types.ObjectId
}

export const CommentSchema=SchemaFactory.createForClass(Comment)
