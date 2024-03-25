import {Router} from 'express'
import {
    registroReservas,
    listarReservas,
    //detalleEstudiantes,
    actualizarReservas,
    eliminarReservas,
} from "../controllers/reservas_controllers.js";



const router = Router()
/**
 * @openapi
 * /api/reservas/registro:
 *   post:
 *     tags:
 *       - Reservas
 *     summary: Registro de Reservas
 *     description: Crea una nueva Reserva.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion:
 *                 type: string
 *                 example: Conferencia sobre el medio ambiente
 *               conferencista:
 *                 type: string
 *                 example: 64ac6a89e7c83c3deae079b8
 *               auditorio:
 *                 type: string
 *                 example: 64ac6a89e7c83c3deae079b8
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
 *                       example: Reserva registrada exitosamente.
 *                     user:
 *                       type: object
 *                       properties:
 *                         data:
 *                           type: array 
 *                           items: 
 *                             type: object
 */
router.post('/reservas/registro', registroReservas);

/**
 * @openapi
 * /api/reservas:
 *   get:
 *     tags:
 *       - Reservas
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  descripcion:
 *                    type: string
 *                    example: Conferencia sobre el medio ambiente
 *                  conferencista:
 *                    type: string
 *                    example: 64ac6a89e7c83c3deae079b8
 *                  auditorio:
 *                    type: string
 *                    example: 64ac6a89e7c83c3deae079b8
 */
router.get('/reservas', listarReservas);
/**
 * @openapi
 * /api/reservas/actualizar/{id}:
 *   put:
 *     tags:
 *       - Reservas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion:
 *                 type: string
 *                 example: Conferencia sobre el medio ambiente
 *               conferencista:
 *                 type: string
 *                 example: 64ac6a89e7c83c3deae079b8
 *               auditorio:
 *                 type: string
 *                 example: 64ac6a89e7c83c3deae079b8
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva a actualizar.
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
 *                   example: Reserva actualizado exitosamente.
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     reserva:
 *                       type: object
 *                       properties:
 *                         descripcion:
 *                           type: string
 *                           example: Conferencia sobre el medio ambiente
 *                         conferencista:
 *                           type: string
 *                           example: 64ac6a89e7c83c3deae079b8
 *                         auditorio:
 *                           type: string
 *                           example: 64ac6a89e7c83c3deae079b8
 */

router.put('/reservas/actualizar/:id', actualizarReservas);

/**
 * @openapi
 * /api/reservas/eliminar/{id}:
 *   delete:
 *     tags:
 *       - Reservas
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la Reservas
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
router.delete("/reservas/eliminar/:id", eliminarReservas);

export default router




