import Reserva from "../models/reservas.js"
import Auditorio from  '../models/auditorios.js'
import Conferencista from "../models/conferencistas.js" 
import mongoose from "mongoose"


// Método para listar todos los reservas
const listarReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find().select("-salida -createdAt -updatedAt -__v")
        res.status(200).json(reservas);
    } catch (error) {
        console.error("Error al obtener la lista de las reservas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}




const registroReservas = async(req,res)=>{
    const {conferencista,auditorio,descripcion} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const conferencistaBDD = await Conferencista.findById(conferencista);
    if (!conferencistaBDD) return res.status(400).json({ msg: "Lo sentimos, el Conferencista no se encuentra registrado" });
    const auditorioBDD = await Auditorio.findById(auditorio);
    if (!auditorioBDD) return res.status(400).json({ msg: "Lo sentimos, el Auditorio no se encuentra registrada" });
    const verificarCodigoBDD = await Reserva.findOne({descripcion})
    const nuevoReserva = new Reserva(req.body)
    await nuevoReserva.save()
    res.status(200).json({msg:"Registro exitoso de la Reserva"})
}

// Método para actualizar una reserva
const actualizarReservas = async(req,res)=>{
    const {id} = req.params
try{
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})

    await Reserva.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).json({msg:"Actualización exitosa de la Reserva"})
}
catch(error) {
    console.error(error);
    res.status(500).json({msg:"No se pudo actulizar los datos de la Reserva del evento"})
}

}
const eliminarReservas = async (req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe la Reserva ${id}`})
    await Reserva.findByIdAndDelete(id);
    res.status(200).json({msg:"Reserva eliminada exitosamente"})
}

export {
        listarReservas,
        registroReservas,
        actualizarReservas,
        eliminarReservas
}