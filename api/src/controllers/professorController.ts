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
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        const professores = await this.professorService.get()
        return res.status(200).send(professores)
    }

    // getById(req: Request, res: Response, next: NextFunction): Promise<Professor> {

    // }

    async save(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { body } = req
        const professor = new Professor(body.name, body.cdMatricula, body.escola, body.email, body.numTelefone)
        const savedProfessor = await this.professorService.save(professor)

        return res.status(201).send(savedProfessor)
    }

    // update(req: Request, res: Response, next: NextFunction): Promise<void> {

    // }

    // delete(req: Request, res: Response, next: NextFunction): Promise<void> {

    // }
}