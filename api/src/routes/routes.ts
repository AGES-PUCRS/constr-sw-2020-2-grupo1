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
 *
 *
 *
 *  ProfessorResponse:
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
 *      isAtivo:
 *          type: boolean
 *      _id:
 *          type: string
 *
 *  ProfessorIDResponse:
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
 *      isAtivo:
 *          type: boolean
 *      _id:
 *          type: string
 *      turmas:
    *       type: array
    *       items:
    *          type: object
    *          properties: 
    *              numeroAlunos: 
    *                  type: number
    *              curso: 
    *                  type: string
    *              disciplina:
    *                  type: object
    *                  properties:
    *                      codigoDisciplina:
    *                          type: number
    *                      nomeDisciplina: 
    *                          type: string
    *              horario:
    *                  type: string
 *                
 */


/**
 * @swagger
 * /professores:
 *  get:
 *      description: Esta rota deve retornar todos os professores do sistema
 *      parameters:
 *        - in: query
 *          name: name
 *          required: false
 *          type: string
 *          description: Filtro opcional na busca de professores
 *        - in: query
 *          name: expand
 *          required: false
 *          type: string
 *          description: Atributo a ser populado dentro de um professor
 *          enum: [turma]
 *      responses:
 *          200: 
 *              description: Sucesso
 *              schema: 
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/ProfessorResponse'
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
 *        - in: query
 *          name: expand
 *          required: false
 *          type: string
 *          description: Atributo a ser populado dentro de um professor
 *          enum: [turma]
 *      responses:
 *          200: 
 *              description: Sucesso
 *              schema: 
 *                  $ref: '#/definitions/ProfessorIDResponse'
 *          404:
 *              description: Professor não encontrado
 *          500:
 *              description: Erro interno
 */
routes.get('/professores/:id', professorController.getById)

/**
 * @swagger
 * /professores/by-cd-matricula/{cdMatricula}:
 *  get:
 *      description: Esta rota deve retornar todos os dados de um professor que tenha o código de matrícula passado
 *      parameters:
 *        - in: path
 *          name: cdMatricula
 *          required: true
 *          type: string
 *          description: Código de matrícula do professor buscado
 *        - in: query
 *          name: expand
 *          required: false
 *          type: string
 *          description: Atributo a ser populado dentro de um professor.
 *          enum: [turma]
 *      responses:
 *          200: 
 *              description: Sucesso
 *              schema: 
 *                  $ref: '#/definitions/ProfessorIDResponse'
 *          404:
 *              description: Professor não encontrado
 *          500:
 *              description: Erro interno
 */
routes.get('/professores/by-cd-matricula/:cdMatricula', professorController.getByCdMatricula)

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
 *              schema:
 *                  $ref: '#/definitions/ProfessorResponse'
 *          500:
 *              description: Erro interno
 */
routes.post('/professores', professorController.save)

/**
 * @swagger
 * /professores/{id}:
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
 * /professores/{id}:
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