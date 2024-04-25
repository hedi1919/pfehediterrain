import { Document } from "mongoose";

export interface IFacture extends Document{
    readonly price: string
    readonly reservation: string
} 
