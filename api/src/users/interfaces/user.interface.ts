import { Document } from "mongoose";


export interface IUser extends Document{
    readonly role:string
    readonly fullName: string
    readonly userName: string
    readonly email: string
    readonly phone: number
    readonly password: string
    readonly refreshToken: string
}