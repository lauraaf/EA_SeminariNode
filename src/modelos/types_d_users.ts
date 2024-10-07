import { ObjectId, model, Schema } from "mongoose";

export interface usersInterface{
    id: number,
    name: string,
    mail: string,
    password: string,
    comment: string,
    //Codi afegit per fer l'exercici
    experiencias: ObjectId[]
}
export type UsersInterfacePublicInfo = Pick<usersInterface, 'id' | 'name' | 'comment'>
export type newUserInfo = Omit<usersInterface,'id'>

export const usersSchema = new Schema<usersInterface>({
    id: Number,
    name: String,
    mail: String,
    password: String,
    comment: String,
    //codi afegit per fer l'exercici
    experiencias: [{type: Schema.Types.ObjectId, ref:'experiencias'}]
})

export const usersofDB = model<usersInterface>('user',usersSchema)