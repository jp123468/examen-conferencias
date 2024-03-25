import {Schema, model} from 'mongoose'
import { response } from 'express'

const auditoriosSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    ubicacion: {
        type: String, 
        required:true,
        trim: true
    },
    capacidad:{
        type:String,
        require:true,
        trim:true,
    }
})



export default model('Auditorio',auditoriosSchema)