import { NextFunction, Request, Response } from "express";
import ProfessorService from "../services/professorService";

export default class ProfessorController {
    professorService

    constructor() {
        this.professorService = new ProfessorService()
    }

    get(req: Request, res: Response, next: NextFunction): Promise<Professor[]> {

    }

    getById(req: Request, res: Response, next: NextFunction): Promise<Professor> {

    }

    save(req: Request, res: Response, next: NextFunction): Promise<Professor> {

    }

    update(req: Request, res: Response, next: NextFunction): Promise<void> {

    }

    delete(req: Request, res: Response, next: NextFunction): Promise<void> {

    }
}