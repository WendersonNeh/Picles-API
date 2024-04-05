import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IsAlpha } from "class-validator"
import { HydratedDocument } from "mongoose"
import { StringifyOptions } from "querystring"

export type ShelterDocument = HydratedDocument<shelter>

@Schema({ versionKey:false})
export class shelter{
    @Prop({required:true})
    name: string
    @Prop({required:true}) 
    whatsapp: string
    @Prop({required:true}) 
    email: string
    @Prop({required:true}) 
    phone: string
    @Prop({required:true}) 
    createdAd: string
    @Prop({required:true}) 
    updatedAd: string
}

export const ShelterSchemas = SchemaFactory.createForClass(shelter)