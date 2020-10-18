import { Router } from 'express'
import ProfessorController from '../controllers/professorController'

const routes = Router()

const professorController = new ProfessorController()

/**
 * @swagger
 * definitions:
 *  Professor:
 *   type: object
 *   properties:
 *      nome:
 *          type: string
 *      escola:
 *          type: string
 *      email:
 *          type: string
 *      numTelefone:
 *          type: string
 */

/**
 * @swagger
 * /professores:
 *  get:
 *      description: Esta rota deve retornar todos os professores do sistema
 *      responses:
 *          200: 
 *              description: Sucesso
 *          500:
 *              description: Erro interno
 */
routes.get('/professores', professorController.get)

/**
 * @swagger
 * /professores/{id}:
 *  get:
 *      description: Esta rota deve retornar todos os dados de um professor e algumas informações sobre as suas turmas
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: string
 *          description: Identificador do professor buscado
 *      responses:
 *          200: 
 *              description: Sucesso
 *          404:
 *              description: Professor não encontrado
 *          500:
 *              description: Erro interno
 */
routes.get('/professores/:id', professorController.getById)

/**
 * @swagger
 * /professores/{id}:
 *  delete:
 *      description: Esta rota irá excluir um professor do sistema
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: string
 *          description: Identificador do professor a ser excluído
 *      responses:
 *          204: 
 *              description: Sucesso
 *          500:
 *              description: Erro interno
 */
routes.delete('/professores/:id', professorController.delete)

/**
 * @swagger
 * /professores:
 *  post:
 *      description: Esta rota irá adicionar um professor do sistema
 *      parameters:
 *        - in: body
 *          name: professor
 *          schema:
 *              $ref: '#/definitions/Professor'
 *      responses:
 *          201: 
 *              description: Sucesso
 *          500:
 *              description: Erro interno
 */
routes.post('/professores', professorController.save)

/**
 * @swagger
 * /professores:
 *  put:
 *      description: Esta rota irá atualizar um professor do sistema
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: string
 *          description: Identificador do professor a ser substituído
 *        - in: body
 *          name: professor
 *          schema:
 *              $ref: '#/definitions/Professor'
 *      responses:
 *          204: 
 *              description: Sucesso
 *          500:
 *              description: Erro interno
 */
routes.put('/professores/:id', professorController.replace)

/**
 * @swagger
 * /professores:
 *  patch:
 *      description: Esta rota irá atualizar um professor do sistema
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: string
 *          description: Identificador do professor a ser atualizado
 *        - in: body
 *          name: professor
 *          schema:
 *              $ref: '#/definitions/Professor'
 *      responses:
 *          204: 
 *              description: Sucesso
 *          500:
 *              description: Erro interno 
 */
routes.patch('/professores/:id', professorController.updateMerge)

export default routes