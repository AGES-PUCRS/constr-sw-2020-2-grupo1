import { Document } from "mongoose"
import Professor from "../domains/entities/professor"
import { IProfessor } from "../domains/models/professorModel"
import ProfessorRepository from "../repositories/professorRepository"
import TurmaService from "./turmaService"

export default class ProfessorService {
    professorRepository: ProfessorRepository
    // turmaService: TurmaService
    constructor() {
        this.professorRepository = new ProfessorRepository()
        // this.turmaService = new TurmaService()

        this.save = this.save.bind(this)
        this.get = this.get.bind(this)
        this.update = this.update.bind(this)
    }

    async get(): Promise<IProfessor[]> {
        return await this.professorRepository.get()
    }

    // getById(id: String): Promise<Professor> {

    // }

    async save(professor: Professor): Promise<IProfessor> {
        return await this.professorRepository.save(professor)
    }

    async update(id: String, professor: Professor): Promise<void> {
        return await this.professorRepository.update(id, professor)
    }

    // delete(id: String): Promise<void> {

    // }
}