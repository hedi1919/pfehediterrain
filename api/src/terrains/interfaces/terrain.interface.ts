import { Document } from "mongoose";


export interface ITerrain extends Document{
    readonly title: string
    readonly description: string
    readonly price: string
    readonly duration: number
    readonly adress: string
    readonly participats: string
    readonly status: string
    readonly surface: string
    readonly latitude: string
    readonly longitude: string
    readonly files: string
    readonly activity : string
    readonly gouvernorat : string
}
