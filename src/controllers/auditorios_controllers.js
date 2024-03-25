import Auditorios from "../models/auditorios.js"
import mongoose from "mongoose"


// Método para listar todos los Auditorios
const listarAuditorios = async (req, res) => {
    try {
        const auditorios = await Auditorios.find().select("-salida -createdAt -updatedAt -__v")
        res.status(200).json(auditorios);
    } catch (error) {
        console.error("Error al obtener la lista de los Auditorios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

const registroAuditorios = async (req, res) => {
    try {
        const { nombre, ubicacion, capacidad} = req.body;
        // Verificar campos requeridos
        if (!ubicacion || !nombre || !capacidad ) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }
        // Verificar si el nombre del auditorio ya existe
        const nombreExistente = await Auditorios.findOne({ nombre });
        if (nombreExistente) {
            return res.status(400).json({ msg: "El nombre ya está registrado" });
        }
        // Crear un nuevo auditorio con los datos proporcionados
        const nuevoAuditorio = new Auditorios({
            nombre,
            ubicacion,
            capacidad,
        });
        // Guardar el auditorio en la base de datos
        await nuevoAuditorio.save();
        res.status(200).json({ msg: "Registro exitoso del Auditorio" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al registrar el Auditorio" });
    }
};



// Método para actualizar un Auditorio
const actualizarAuditorios = async (req, res) => {
    try {
        const auditorioId = req.params.id;
        // Verifica si se proporcionó un ID de auditorio
        if (!auditorioId) {
            return res.status(400).json({ msg: "ID del Auditorio no proporcionado" });
        }
        // Verifica si se proporcionan todos los campos necesarios en el cuerpo de la solicitud
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" });
        }
        // Actualiza los datos del auditorio utilizando el ID proporcionado
        await Auditorios.findByIdAndUpdate(auditorioId, req.body);
        // Devuelve un mensaje de éxito
        res.status(200).json({ msg: "Actualización exitosa del Auditorio" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo actualizar los datos del Auditorio" });
    }
};


const eliminarAuditorios = async (req, res) => {
    try {
        const auditorioId = req.params.id; // Obtener el ID del auditorio de los parámetros de la URL
        // Verificar si el ID del auditorio es válido
        if (!auditorioId) {
            return res.status(400).json({ msg: "ID del Auditorio no proporcionado" });
        }
        // Verificar si el auditorio existe en la base de datos
        const auditorio = await Auditorios.findById(auditorioId);
        if (!auditorio) {
            return res.status(404).json({ msg: "Auditorio no encontrado" });
        }
        // Eliminar el auditorio de la base de datos
        await Auditorios.findByIdAndDelete(auditorioId);
        res.status(200).json({ msg: "Auditorio eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar el Auditorio" });
    }
};

export {
        listarAuditorios,
        registroAuditorios,
        actualizarAuditorios,
        eliminarAuditorios
}