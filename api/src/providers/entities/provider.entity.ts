import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type ProviderDocument=HydratedDocument<Provider>
@Schema()
export class Provider {}
export const providerSchema=SchemaFactory.createForClass(Provider)
