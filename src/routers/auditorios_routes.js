import { Router } from 'express'
import {
    registroAuditorios,
    listarAuditorios,
    //detalleEstudiantes,
    actualizarAuditorios,
    eliminarAuditorios,
} from "../controllers/auditorios_controllers.js";



const router = Router()
/**
 * @openapi
 * /api/auditorios/registro:
 *   post:
 *     tags:
 *       - Auditorios
 *     summary: Registro de Auditorios disponible
 *     description: Crea un nuevo auditorio.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type : string
 *                 example: Marcelo Davila 
 *               ubicacion:
 *                 type: string
 *                 example: Sur de Quito
 *               capacidad:
 *                 type: string
 *                 example: 10
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Auditorio registrado exitosamente.
 *                     user:
 *                       type: object
 *                       properties:
 *                          nombre:
 *                            type : string
 *                            example: Marcelo Davila 
 *                          ubicacion:
 *                            type: string
 *                            example: Sur de Quito
 *                          capacidad:
 *                            type: string
 *                            example: 10
 */

router.post('/auditorios/registro', registroAuditorios)

/**
 * @openapi
 * /api/auditorios:
 *   get:
 *     tags:
 *       - Auditorios
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *                     properties:
 *                        nombre:
 *                          type : string
 *                          example: Marcelo Davila 
 *                        ubicacion:
 *                          type: string
 *                          example: Sur de Quito
 *                        capacidad:
 *                          type: string
 *                          example: 10
 */

router.get('/auditorios', listarAuditorios)

/**
 * @openapi
 * /api/auditorios/actualizar/{id}:
 *   put:
 *     tags:
 *       - Auditorios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Marcelo Davila 
 *               ubicacion:
 *                 type: string
 *                 example: Sur de Quito
 *               capacidad:
 *                 type: string
 *                 example: 10
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Auditorio a actualizar.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Auditorio actualizado exitosamente.
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     nombre:
 *                       type: string
 *                       example: Marcelo Davila 
 *                     ubicacion:
 *                       type: string
 *                       example: Sur de Quito
 *                     capacidad:
 *                       type: string
 *                       example: 10
 */
router.put('/auditorios/actualizar/:id', actualizarAuditorios)

/**
 * @openapi
 * /api/auditorios/eliminar/{id}:
 *   delete:
 *     tags:
 *       - Auditorios
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del Auditorio
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               salida:
 *                 format: date
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.delete("/auditorios/eliminar/:id", eliminarAuditorios);

export default router