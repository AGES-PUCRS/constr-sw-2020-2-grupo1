import ProfessorRepository from "../repositories/professorRepository"
import TurmaService from "./turmaService"

export default class ProfessorService {
    professorRepository
    turmaService
    constructor() {
        this.professorRepository = new ProfessorRepository()
        this.turmaService = new TurmaService()
    }

    get(): Promise<Professor[]> {

    }

    getById(id: String): Promise<Professor> {

    }

    save(professor: Professor): Promise<Professor> {

    }

    update(professor: Professor): Promise<void> {

    }

    delete(id: String): Promise<void> {

    }
}