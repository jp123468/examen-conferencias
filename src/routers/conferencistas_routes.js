import {Router} from 'express'
import {
    registroConferencistas,
    listarConferencistas,
    //detalleEstudiantes,
    actualizarConferencistas,
    eliminarConferencistas,
} from "../controllers/conferencistas_controllers.js";



const router = Router()

/**
 * @openapi
 * /api/conferencistas/registro:
 *   post:
 *     tags:
 *       - Conferencistas
 *     summary: Registro de Conferencista
 *     description: Crea un nuevo conferencista.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Julio
 *               apellido:
 *                 type : string
 *                 example: Peres 
 *               cedula:
 *                 type: string
 *                 example: 9999999999
 *               genero:
 *                  type: string
 *                  example: masculino
 *               ciudad:
 *                 type: string
 *                 example: San Pedro
 *               direccion:
 *                 type: string
 *                 example: Pueblo Nuevo y la que Cruza
 *               telefono:
 *                 type: string
 *                 example: 099999999
 *               email:
 *                 type: string
 *                 example: julio@hotmail.com
 *               empresa:
 *                 type: string
 *                 example: EPN 

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
 *                       example: Usuario registrado exitosamente.
 *                     user:
 *                       type: object
 *                       properties:
 *                           properties:
 *                              nombre:
 *                                type: string
 *                                example: Julio
 *                              apellido:
 *                                type : string
 *                                example: Peres 
 *                              cedula:
 *                                type: string
 *                                example: 9999999999
 *                              genero:
 *                                 type: string
 *                                 example: masculino
 *                              ciudad:
 *                                type: string
 *                                example: San Pedro
 *                              direccion:
 *                                type: string
 *                                example: Pueblo Nuevo y la que Cruza
 *                              telefono:
 *                                type: string
 *                                example: 099999999
 *                              email:
 *                                type: string
 *                                example: julio@hotmail.com
 *                              empresa:
 *                                type: string
 *                                example: EPN 
 */

router.post('/conferencistas/registro',registroConferencistas)
/**
 * @openapi
 * /api/conferencistas:
 *   get:
 *     tags:
 *       - Conferencistas
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
 *                       example: Usuarios.
 *                     user:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           nombre:
 *                             type: string
 *                             example: Julio
 *                           apellido:
 *                             type: string
 *                             example: Peres 
 *                           cedula:
 *                             type: string
 *                             example: "9999999999"
 *                           genero:
 *                             type: string
 *                             example: masculino
 *                           ciudad:
 *                             type: string
 *                             example: San Pedro
 *                           direccion:
 *                             type: string
 *                             example: Pueblo Nuevo y la que Cruza
 *                           telefono:
 *                             type: string
 *                             example: "099999999"
 *                           email:
 *                             type: string
 *                             example: julio@hotmail.com
 *                           empresa:
 *                             type: string
 *                             example: EPN 
 *                           id:
 *                             type: string
 *                             example: s45l5oi10A
 */

router.get('/conferencistas',listarConferencistas)

/**
 * @openapi
 * /api/conferencistas/actualizar/{id}:
 *   put:
 *     tags:
 *       - Conferencistas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Julio
 *               apellido:
 *                 type: string
 *                 example: Peres 
 *               cedula:
 *                 type: string
 *                 example: "9999999999"
 *               genero:
 *                 type: string
 *                 example: masculino
 *               ciudad:
 *                 type: string
 *                 example: San Pedro
 *               direccion:
 *                 type: string
 *                 example: Calle vieja 123
 *               telefono:
 *                 type: string
 *                 example: "098988955555"
 *               email:
 *                 type: string
 *                 example: julio78@hotmail.com
 *               empresa:
 *                 type: string
 *                 example: EPN 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Conferencistas a actualizar.
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
 *                   example: Perfil actualizado exitosamente.
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                           example: Julio
 *                         apellido:
 *                           type: string
 *                           example: Peres 
 *                         cedula:
 *                           type: string
 *                           example: "9999999999"
 *                         genero:
 *                           type: string
 *                           example: masculino
 *                         ciudad:
 *                           type: string
 *                           example: San Pedro
 *                         direccion:
 *                           type: string
 *                           example: Calle vieja 123
 *                         telefono:
 *                           type: string
 *                           example: "098988955555"
 *                         email:
 *                           type: string
 *                           example: julio78@hotmail.com
 *                         empresa:
 *                           type: string
 *                           example: EPN 
 */

router.put('/conferencistas/actualizar/:id',actualizarConferencistas)
    
/**
 * @openapi
 * /api/conferencistas/eliminar/{id}:
 *   delete:
 *     tags:
 *       - Conferencistas
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del conferencistas
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
router.delete("/conferencistas/eliminar/:id",eliminarConferencistas);

export default router




