import { Router } from 'express'
import ProfessorController from '../controllers/professorController'

const routes = Router()

const professorController = new ProfessorController()

// routes.get('/professores', professorController.get)
// routes.get('/professores/:id', professorController.getById)
// routes.delete('/professores/:id', professorController.delete)
routes.post('/professores', professorController.save)
// routes.put('/professores/:id', professorController.update)


export default routes