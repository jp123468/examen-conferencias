import {Schema, model} from 'mongoose'
import { response } from 'express'

const conferencistasSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellido: {
        type: String, 
        required:true,
        trim: true
    },
    cedula:{
        type:Number,
        require:true,
        trim:true,
    },
    genero:{
        type:String,
        require: true,
        trim: true
    },
    ciudad:{
        type: String,
        require: true,
        trim: true
    },
    direccion:{
        type: String,
        require: true,
        trim: true
    },
    telefono:{
        type:Number,
        require:true
    }  ,
    email:{
        type:String,
        require:true,
        trim:true,
		unique:true
    }, 
    empresa:{
        type: String,
        require:true
    }  
 
})


export default model('Conferencista',conferencistasSchema)