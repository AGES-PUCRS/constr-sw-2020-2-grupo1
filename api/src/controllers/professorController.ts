import { NextFunction, Request, Response } from "express";
import { Document } from "mongoose";
import ProfessorService from "../services/professorService";
import Professor from '../domains/entities/professor'

export default class ProfessorController {
    professorService: ProfessorService

    constructor() {
        this.professorService = new ProfessorService()

        this.save = this.save.bind(this)
        this.get = this.get.bind(this)
        this.update = this.update.bind(this)
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        const professores = await this.professorService.get()
        return res.status(200).send(professores)
    }

    // getById(req: Request, res: Response, next: NextFunction): Promise<Professor> {

    // }

    async save(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { nome, cdMatricula, escola, email, numTelefone } = req.body
        const professor = new Professor(nome, cdMatricula, escola, email, numTelefone)
        const savedProfessor = await this.professorService.save(professor)

        return res.status(201).send(savedProfessor)
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { nome, cdMatricula, escola, email, numTelefone } = req.body
        const { id } = req.params
        const professor = new Professor(nome, cdMatricula, escola, email, numTelefone)
        await this.professorService.update(id, professor)

        return res.status(204).send()
    }

    // delete(req: Request, res: Response, next: NextFunction): Promise<void> {

    // }
}