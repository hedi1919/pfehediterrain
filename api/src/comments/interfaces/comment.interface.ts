import { Document } from "mongoose";

export interface IComment extends Document{
    readonly comment: string
    readonly note: string
    readonly terrain : string
    readonly user : string


}