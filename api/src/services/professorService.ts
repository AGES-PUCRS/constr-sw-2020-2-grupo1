import { Document } from "mongoose"
import Professor from "../domains/entities/professor"
import ProfessorRepository from "../repositories/professorRepository"
import TurmaService from "./turmaService"

export default class ProfessorService {
    professorRepository: ProfessorRepository
    // turmaService: TurmaService
    constructor() {
        this.professorRepository = new ProfessorRepository()
        // this.turmaService = new TurmaService()

        this.save = this.save.bind(this)
    }

    // get(): Promise<Professor[]> {

    // }

    // getById(id: String): Promise<Professor> {

    // }

    async save(professor: Professor): Promise<Document> {
        return await this.professorRepository.save(professor)
    }

    // update(professor: Professor): Promise<void> {

    // }

    // delete(id: String): Promise<void> {

    // }
}