import { Document } from "mongoose";

export interface IActivity extends Document{
    readonly name: string
}