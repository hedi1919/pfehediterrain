import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerDocument=HydratedDocument<Customer>
@Schema()

export class Customer {

    role:string
    
}
export const customerSchema=SchemaFactory.createForClass(Customer)
