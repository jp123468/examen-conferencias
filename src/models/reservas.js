import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const reservaSchema = new Schema({
    descripcion : {
        type:String,
        require:true,
        trim:true
    },
    conferencista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conferencista'
    },
    auditorio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auditorio'
    }
});

export default model('Reservas', reservaSchema);
