import ProfessorRepository from "../repositories/professorRepository"

export default class ProfessorService {
    professorRepository
    constructor() {
        this.professorRepository = new ProfessorRepository()
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