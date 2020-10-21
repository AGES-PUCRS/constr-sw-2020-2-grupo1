import { NextFunction, Request, Response } from "express";
import ProfessorService from "../services/professorService";
import Professor from '../domains/entities/professor'

export default class ProfessorController {
    professorService: ProfessorService

    constructor() {
        this.professorService = new ProfessorService()

        this.save = this.save.bind(this)
        this.get = this.get.bind(this)
        this.replace = this.replace.bind(this)
        this.updateMerge = this.updateMerge.bind(this)
        this.delete = this.delete.bind(this)
        this.getById = this.getById.bind(this)
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { name } = req.query
        const professores = await this.professorService.get(name as string)

        return res.status(200).send(professores)
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { id } = req.params
        const professor = await this.professorService.getById(id)
        return res.status(200).send(professor)
    }

    async save(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { nome, cdMatricula, escola, email, numTelefone } = req.body
        const professor = new Professor(nome, cdMatricula, escola, email, numTelefone)
        const savedProfessor = await this.professorService.save(professor)

        return res.status(201).send(savedProfessor)
    }

    async replace(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { nome, cdMatricula, escola, email, numTelefone, isAtivo } = req.body
        const { id } = req.params

        const professor = new Professor(nome, cdMatricula, escola, email, numTelefone, id, isAtivo)
        await this.professorService.replace(professor)

        return res.status(204).send()
    }

    async updateMerge(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { body: professor }: { body: Professor } = req
        const { id } = req.params
        professor.id = id
        await this.professorService.updateMerge(professor)

        return res.status(204).send()
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { id } = req.params
        await this.professorService.delete(id)

        return res.status(204).send()
    }
}