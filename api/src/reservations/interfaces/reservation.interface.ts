import { Document } from "mongoose";

export interface IReservation extends Document{
    readonly date: Date
    readonly terrain:string
    readonly user:string
} 
