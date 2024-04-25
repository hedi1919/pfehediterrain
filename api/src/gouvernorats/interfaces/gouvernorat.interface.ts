import { Document } from "mongoose";

export interface IGouvernorat extends Document{
    readonly name: string
}