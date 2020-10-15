import { Router } from 'express'
import ProfessorController from '../controllers/professorController'

const routes = Router()

const professorController = new ProfessorController()

/**
 * @swagger
 * /professores:
 *  get:
 *      description: Esta rota deve retornar todos os professores do sistema
 *      responses:
 *          200: 
 *              description: Sucesso
 * 
 */
routes.get('/professores', professorController.get)

/**
 * @swagger
 * /professores:
 *  get:
 *      description: Esta rota deve retornar todos os dados de um professor e algumas informações sobre as suas turmas
 *      responses:
 *          200: 
 *              description: Sucesso
 * 
 */
routes.get('/professores/:id', professorController.getById)

/**
 * @swagger
 * /professores:
 *  delete:
 *      description: Esta rota irá excluir um professor do sistema
 *      responses:
 *          204: 
 *              description: Sucesso
 * 
 */
routes.delete('/professores/:id', professorController.delete)

/**
 * @swagger
 * /professores:
 *  post:
 *      description: Esta rota irá adicionar um professor do sistema
 *      responses:
 *          201: 
 *              description: Sucesso
 * 
 */
routes.post('/professores', professorController.save)

/**
 * @swagger
 * /professores:
 *  put:
 *      description: Esta rota irá atualizar um professor do sistema
 *      responses:
 *          204: 
 *              description: Sucesso
 * 
 */
routes.put('/professores/:id', professorController.replace)

/**
 * @swagger
 * /professores:
 *  patch:
 *      description: Esta rota irá atualizar um professor do sistema
 *      responses:
 *          204: 
 *              description: Sucesso
 * 
 */
routes.patch('/professores/:id', professorController.updateMerge)

export default routes