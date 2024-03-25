import Conferencistas from "../models/conferencistas.js"
import mongoose from "mongoose"


// Método para listar todos los Conferencistas
const listarConferencistas = async (req, res) => {
    try {
        const conferencista = await Conferencistas.find().select("-salida -createdAt -updatedAt -__v")
        res.status(200).json(conferencista);
    } catch (error) {
        console.error("Error al obtener la lista de los Conferencistas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

const registroConferencistas = async (req, res) => {
    try {
        const { nombre, apellido, cedula, genero, ciudad, direccion, telefono, email, empresa } = req.body;
        // Verificar campos requeridos
        if (!nombre || !apellido || !cedula || !genero || !ciudad || !direccion || !telefono || !email || !empresa) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }
        // Verificar si el nombre del auditorio ya existe
        const nombreExistente = await Conferencistas.findOne({ nombre });
        if (nombreExistente) {
            return res.status(400).json({ msg: "El nombre ya está registrado" });
        }
        const cedulaExistente = await Conferencistas.findOne({ cedula });
        if (cedulaExistente) {
            return res.status(400).json({ msg: "La cedula ya está registrado" });
        }
        // Crear un nuevo Conferencista con los datos proporcionados
        const nuevoConferencista = new Conferencistas({
            nombre,
            apellido,
            cedula,
            genero,
            ciudad, 
            direccion,
            telefono, 
            email, 
            empresa
        });
        // Guardar el conferencista en la base de datos
        await nuevoConferencista.save();
        res.status(200).json({ msg: "Registro exitoso del Conferencista" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al registrar el Conferencista" });
    }
};



// Método para actualizar un Conferencista
const actualizarConferencistas = async (req, res) => {
    try {
        const conferencistaId = req.params.id; // Obtener el ID del conferencista de los parámetros de la URL
        // Verificar si se proporcionó un ID del conferencista
        if (!conferencistaId) {
            return res.status(400).json({ msg: "ID del Conferencista no proporcionado" });
        }
        // Verificar si se proporcionan todos los campos necesarios en el cuerpo de la solicitud
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" });
        }
        // Actualizar los datos del conferencista utilizando el ID proporcionado
        await Conferencistas.findByIdAndUpdate(conferencistaId, req.body);
        // Devuelve un mensaje de éxito
        res.status(200).json({ msg: "Actualización exitosa del Conferencista" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo actualizar los datos del Conferencista" });
    }
};


const eliminarConferencistas = async (req, res) => {
    try {
        const conferencistaId = req.params.id; // Obtener el ID del auditorio de los parámetros de la URL
        // Verificar si el ID del auditorio es válido
        if (!conferencistaId) {
            return res.status(400).json({ msg: "ID del Conferencista no proporcionado" });
        }
        // Verificar si el Conferencista existe en la base de datos
        const conferencista = await Conferencistas.findById(conferencistaId);
        if (!conferencista) {
            return res.status(404).json({ msg: "Conferencista no encontrado" });
        }
        // Eliminar el conferencista de la base de datos
        await Conferencistas.findByIdAndDelete(conferencistaId);
        res.status(200).json({ msg: "Conferencista eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar el Conferencista" });
    }
};

export {
    listarConferencistas,
    registroConferencistas,
    actualizarConferencistas,
    eliminarConferencistas
}